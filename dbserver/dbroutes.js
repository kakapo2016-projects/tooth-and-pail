// import express from 'express'
var express = require('express')
// import path from 'path'
var path = require('path')
// import cors from 'cors'
var cors = require('cors')
// import body-parser from 'body-parser'
var bodyparser = require('body-parser')
// import uuid from 'uuid'
var uuid = require('uuid')
// import compression from 'compression'
var compression = require('compression')
// import routes from './dbroutes'

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: '../datastore/tandp.sqlite3'
  },
  useNullAsDefault: true
})

module.exports = function routes(app) {

  app.get('/', function(req, res) {
    res.send('hello world')
  })

  app.get('/recipients', function(req, res) {
    console.log("getting recipients", req)
      knex('recipients')
      .select('*')
      .then(function(resp) {
        console.log ("inget", resp)
          res.send(resp)
  })
})


    app.get('/recipients/:recipientID', function(req, res) {
      console.log("in GET for user", req.params.recipientID)

        knex('recipients')

        .where('recipients.recipientID', req.params.recipientID)
        .then(function(resp) {
          console.log ("inget with userid", resp)
            res.send(resp[0])
        })

    })

}








// }
