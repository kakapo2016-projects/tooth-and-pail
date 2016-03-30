"use strict"

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

require('babel-core/register')

var express = require('express')
var path = require('path')
var compression = require('compression')
var React = require('react')
var renderToString = require('react-dom/server').renderToString
var match = require('react-router').match
var RouterContext = require('react-router').RouterContext
var routes = require('./src/routes.js')
var http = require('http')

var app = express()
app.use(compression())

var server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // hey we made it!
      const appHtml = renderToString(React.createElement(RouterContext, Object.assign({}, props)))
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
    <link rel="icon" type="image/ico" href="images/favicon.ico">
    <title>TOOTH AND PAIL</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

var PORT = process.env.PORT || 8080
server.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
