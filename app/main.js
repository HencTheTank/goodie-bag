import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import store from './store'
import Root from './components/root'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Root />
    </Provider>
  </Router>,
  document.getElementById('main')
)
