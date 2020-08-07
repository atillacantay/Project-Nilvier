import React, { Suspense, FC } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useNetwork } from './hooks/useNetwork'

import { routes } from './Routes'
import Layout from './layouts/Layout'
import LoadingScreen from './components/LoadingScreen'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import ErrorBoundary from './components/ErrorBoundary'

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
  const isOnline = useNetwork()

  if (!isOnline) console.log('No Internet Connection')

  const routeComponents = routes.map(({ exact, path, component }, key) => (
    <Route exact={exact} path={path} component={component} key={key} />
  ))

  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <Layout>
            <Switch>{routeComponents}</Switch>
          </Layout>
        </Suspense>
      </ErrorBoundary>
    </Router>
  )
}

export default App
