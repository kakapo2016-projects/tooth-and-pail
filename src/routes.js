// CLEANED

import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Profile from './components/Profile'
import Home from './components/Home'
import Trends from './components/Trends'
import RecipientSignup from './components/RecipientSignup'
import About from './components/About'
import Feed from './components/Feed'

module.exports = (
  <Router history={browserHistory}>
  <Route path="/" component={Home}></Route>
    <Route path="gallery" component={App}></Route>
    <Route path="recipient/:recipientID" component={Profile}></Route>
    <Route path="trends" component={Trends}></Route>
    <Route path="submitteeth" component={RecipientSignup}></Route>
    <Route path="about" component={About}></Route>
    <Route path="feed" component={Feed}></Route>
  </Router>
)
