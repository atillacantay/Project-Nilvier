import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import './index.css'
import App from './App'
import { CssBaseline } from '@material-ui/core'
import * as serviceWorker from './serviceWorker'

import ThemeProvider from './components/ThemeProvider'
import { rootReducer } from './store/index'

const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
