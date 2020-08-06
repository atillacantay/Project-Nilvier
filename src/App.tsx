import React, { Suspense, FC } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { routes } from './Routes'
import Layout from './layouts/Layout'
import LoadingScreen from './components/LoadingScreen'

import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
    },
  }),
)

const App: FC = () => {
  useStyles()

  const routeComponents = routes.map(({ exact, path, component }, key) => (
    <Route exact={exact} path={path} component={component} key={key} />
  ))

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Router>
        <Layout>
          <Switch>
            {routeComponents}
            {/* <Route exact path="/" component={MainPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/giphy" component={GiphyContainer} />
          <Route exact path="/fooditive" component={FooditiveContainer} />
          <Route exact path="/twitch" component={Twitch} />
          <Route exact path="/twitch/streams/game/:game" component={TwitchStreams} />
          <Route component={NotFound} /> */}
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}

export default App
