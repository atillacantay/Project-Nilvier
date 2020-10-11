import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useNetwork } from './hooks/useNetwork'
import { routes } from './Routes'

import { useSnackbar } from 'notistack'

import Layout from './layouts/Layout'
import LoadingScreen from './components/LoadingScreen'
import AuthGuard from './components/AuthGuard'
import ErrorBoundary from './components/ErrorBoundary'

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

const App = () => {
  useStyles()
  const isOnline = useNetwork()
  const snackbar = useSnackbar()

  if (!isOnline) snackbar.enqueueSnackbar('No Internet Connection', { variant: 'warning' })

  const routeComponents = routes.map(({ exact, path, component }, key) => (
    <Route exact={exact} path={path} component={component} key={key} />
  ))

  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <AuthGuard>
            <Layout>
              <Switch>{routeComponents}</Switch>
            </Layout>
          </AuthGuard>
        </Suspense>
      </ErrorBoundary>
    </Router>
  )
}

export default App
