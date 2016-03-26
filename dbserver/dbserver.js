var express = require('express')
var path = require('path')
var cors = require('cors')
var uuid = require('uuid')
var compression = require('compression')
var routes = require('./dbroutes')

var app = express()

app.use(compression())
// app.use(bodyparser)

app.use(cors({
  origin: 'http://localhost:8080'
}))

routes(app)

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
