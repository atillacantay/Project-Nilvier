/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, Fragment } from 'react'
import { Switch, Redirect, Route, HashRouter } from 'react-router-dom'

import Layout from './layouts/Layout'
import LoadingScreen from './components/LoadingScreen'

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
    path: '/app',
    layout: Layout,
    routes: [
      {
        exact: true,
        path: '/app/',
        component: () => <Redirect to="/" />,
      },
      {
        exact: true,
        path: '/app/about',
        component: lazy(() => import('./containers/About')),
      },
      {
        exact: true,
        path: '/app/giphy',
        component: lazy(() => import('./containers/GiphyContainer')),
      },
      {
        exact: true,
        path: '/app/fooditive',
        component: lazy(() => import('./containers/fooditive/FooditiveContainer')),
      },
      {
        exact: true,
        path: '/app/twitch',
        component: lazy(() => import('./containers/twitch/Twitch')),
      },
      {
        exact: true,
        path: '/app/twitch/streams/game/:game',
        component: lazy(() => import('./containers/twitch/TwitchStreams')),
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
]

const renderRoutes = ({ routes }) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <HashRouter>
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
                render={props => (
                  <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
                )}
              />
            )
          })}
        </Switch>
      </HashRouter>
    </Suspense>
  ) : null

function Routes() {
  return renderRoutes(routesConfig)
}

export default Routes
