import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './containers/MainPage'
import About from './containers/About'
import GiphyContainer from './containers/GiphyContainer'

import Indicator from './components/Indicator'
import Layout from './layouts/Layout'

const App: React.FC = () => {
  return (
    <Indicator>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/giphy" component={GiphyContainer} />
          </Switch>
        </Layout>
      </Router>
    </Indicator>
  )
}

export default App
