import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './containers/MainPage'
import About from './containers/About'
import GiphyContainer from './containers/GiphyContainer'
import FooditiveContainer from './containers/fooditive/FooditiveContainer'

import Indicator from './components/Indicator'
import Layout from './layouts/Layout'
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

const App: React.FC = () => {
  useStyles()
  return (
    <Indicator>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/giphy" component={GiphyContainer} />
            <Route exact path="/fooditive" component={FooditiveContainer} />
          </Switch>
        </Layout>
      </Router>
    </Indicator>
  )
}

export default App
