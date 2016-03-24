import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Profile from './components/Profile'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="recipient/:recipientID" component={Profile}>
    </Route>
  </Router>
)
