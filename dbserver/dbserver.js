// CLEANED //

var express = require('express')
var cors = require('cors')
var compression = require('compression')
var routes = require('./dbroutes')

var app = express()
app.use(compression())

app.use(cors({
  origin: 'http://localhost:8080'
}))

routes(app)

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Production Teeth server running at localhost:' + PORT)
})


// wrap the app.listen in the Charles magic which prevents it 
// being called if required into the test folder
// then module.exports = app
