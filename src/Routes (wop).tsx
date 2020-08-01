import React, { lazy, Suspense, Fragment, FC } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import Layout from './layouts/Layout'
import Indicator from './components/LoadingScreen'

const routesConfig = [
  // {
  //   exact: true,
  //   path: '/',
  //   component: () => <Redirect to="/home" />,
  // },
  // {
  //   exact: true,
  //   path: '/404',
  //   component: lazy(() => import('src/views/pages/Error404View')),
  // },
  {
    path: '/',
    layout: Layout,
    routes: [
      {
        exact: true,
        path: '/',
        component: () => <Redirect to="/" />,
      },
      {
        exact: true,
        path: '/about',
        component: lazy(() => import('./containers/About')),
      },
      {
        exact: true,
        path: '/giphy',
        component: lazy(() => import('./containers/GiphyContainer')),
      },
      {
        exact: true,
        path: '/fooditive',
        component: lazy(() => import('./containers/fooditive/FooditiveContainer')),
      },
      {
        exact: true,
        path: '/twitch',
        component: lazy(() => import('./containers/twitch/Twitch')),
      },
      {
        exact: true,
        path: '/twitch/streams/game/:game',
        component: lazy(() => import('./containers/twitch/TwitchStreams')),
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
]

type Routes = {
  exact: boolean
  path: string
  component: () => JSX.Element | React.LazyExoticComponent<React.ComponentType<any>>
  guard?: undefined
  layout?: undefined
  routes?: {
    exact?: boolean
    path?: string
    component: () => JSX.Element | React.LazyExoticComponent<React.ComponentType<any>>
  }
}

type RouteProps = {
  routes: Routes[]
}

const renderRoutes: FC<RouteProps> = ({ routes }) =>
  routes ? (
    <Suspense fallback={<Indicator />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment
          const Layout = route.layout || Fragment
          const Component = route.component

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              // render={props => <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>}
            />
          )
        })}
      </Switch>
    </Suspense>
  ) : null

// function Routes() {
//   return renderRoutes(routesConfig)
// }

export default Routes
