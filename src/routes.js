import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Profile from './components/Profile'
import Home from './components/Home'
import Trends from './components/Trends'

module.exports = (
  <Router history={browserHistory}>
  <Route path="/" component={Home}></Route>
    <Route path="gallery" component={App}></Route>
    <Route path="recipient/:recipientID" component={Profile}></Route>
    <Route path="trends" component={Trends}></Route>
  </Router>
)
