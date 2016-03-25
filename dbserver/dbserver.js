// import express from 'express'
var express = require('express')
// import path from 'path'
var path = require('path')
// import cors from 'cors'
var cors = require('cors')
// import body-parser from 'body-parser'
// var bodyparser = require('body-parser')
// import uuid from 'uuid'
var uuid = require('uuid')
// import compression from 'compression'
var compression = require('compression')
// import routes from './dbroutes'
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
