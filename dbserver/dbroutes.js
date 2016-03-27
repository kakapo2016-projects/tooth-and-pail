
var express = require('express')
var path = require('path')
var cors = require('cors')
var bodyparser = require('body-parser')
var uuid = require('uuid')
var compression = require('compression')
var bcrypt = require('bcryptjs')

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    database : 'tooth_and_pail'
  }
})

module.exports = function routes(app) {
  var urlencodedParser = bodyparser.urlencoded({ extended: false })
  app.use(bodyparser.json())

  // GET REQUESTS //

  app.get('/', function(req, res) {
    res.send('hello teeth')
  })

  app.get('/recipients', function(req, res) {
    knex('recipients')
    .select('*')
    .then(function(resp) {
      res.send(resp)
    })
  })

  app.get('/recipients/:recipientID', function(req, res) {
    knex('recipients')
    .where('recipients.recipientID', req.params.recipientID)
    .then(function(resp) {
      res.send(resp[0])
    })
  })

  app.get('/donations', function(req, res) {
    knex('donations')
    .select('*')
    .then(function(resp) {
      res.send(resp)
    })
  })

  app.get('/donations/:donationID', function(req, res) {
    knex('donations')
    .where('donations.donationID', req.params.donationID)
    .then(function(resp) {
      res.send(resp[0])
    })
  })

  app.get('/donations/donor/:donorID', function(req, res) {
    knex('donations')
    .where('donations.donorID', req.params.donorID)
    .select('*')
    .then(function(resp) {
      res.send(resp)
    })
  })

  app.get('/donations/recipient/:recipientID', function(req, res) {
    knex('donations')
    .where('donations.recipientID', req.params.recipientID)
    .select('*')
    .then(function(resp) {
      res.send(resp)
    })
  })

  app.get('/donors', function(req, res) {
    knex('donors')
    .select('*')
    .then(function(resp) {
      res.send(resp)
    })
  })

  app.get('/donors/:donorID', function(req, res) {
    knex('donors')
    .where('donors.donorID', req.params.donorID)
    .then(function(resp) {
      res.send(resp[0])
    })
  })

  app.get('/donors/name/:donorName', function(req, res) {
    knex('donors')
    .where('donors.donorName', req.params.donorName)
    .then(function(resp) {
      res.send(resp[0])
    })
  })

  app.get('/donors/email/:email', function(req, res) {
    knex('donors')
    .where('donors.email', req.params.email)
    .then(function(resp) {
      res.send(resp[0])
    })
    // .catch(function(err){
    //   console.log("ERROR! ", err)
    // })
})

  app.get('/ratings/:recipientID', function(req, res) {
    console.log("in GET ratings for a recipient", req.params.recipientID)
    knex('ratings')
    .where('ratings.recipientID', req.params.recipientID)
    .then(function(resp) {
      res.send(resp)
    })
  })

  // app.get('/ratings/:recipientID/:donorID', function(req, res) {
  //   console.log("in GET ratings for a recipient by donorid", req.params.recipientID, req.params.donorID)
  //   knex('ratings')
  //   .where({
  //     ratings.recipientID: req.params.recipientID,
  //     ratings.donorID:  req.params.donorID
  //   })
  //   .select('*')
  //   .then(function(resp) {
  //     console.log(resp)
  //     res.send(resp)
  //   })
  // })

  app.get('/ratings/:recipientID', function(req, res) {
    console.log("in GET ratings for a recipient", req.params.recipientID, req.params.donorID)
    knex('ratings')
    .where('ratings.recipientID', req.params.recipientID)
    .then(function(resp) {
      console.log(resp)
      res.send(resp)
    })
  })

  // ENCRYPTION

  app.post('/encrypt', function(req, res) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) { console.log("ERROR GENERATING SALT: ", err); return }
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) { console.log("ERROR ENCRYPTING: ", err); return }
        res.send(hash)
    })
  })
})

  app.post('/unencrypt', function(req, res) {
    bcrypt.compare(req.body.password, req.body.passwordHash, function(err, resp) {
    if (resp === true) {
      console.log("password returned match TRUE")
      res.send(true)
    } else {
      console.log("password returned match FALSE")
      res.send(false)
    }
  })
})

  // POST

  app.post('/donors', function(req, res) {
    console.log("in POST to donors", req.body)
    var newId = uuid.v4()
    knex('donors')
    .insert({
      donorID: newId ,
      donorName: req.body.donorName,
      passwordHash: req.body.passwordHash,
      email: req.body.email
    })
    .then(function(resp) {
      res.send(newId)
    })
  })

  app.post('/donations', function(req, res) {
    console.log("in POST to donations", req.body)
    var newId = uuid.v4()
    knex('donations')
    .insert({
      donationID: newId,
      donorID: req.body.donorID,
      recipientID: req.body.recipientID,
      amount: req.body.amount
    })
    .then(function(resp) {
      res.send(resp)
    })
  })

  app.post('/recipients', function(req, res) {
    var newId = uuid.v4()
    knex('recipients')
      .insert({
        recipientID: newId ,
        name: req.body.Name,
        imgURL: req.body.imgURL,
        received: req.body.received,
        target: req.body.target,
        sobStory: req.body.sobStory,
        donorID: req.body.donorID
      })
      .then(function(resp) {
          res.send(resp)
      })
    })
    app.post('/ratings', function(req, res) {
      var newId = uuid.v4()
      knex('ratings')
        .insert({
          ratingID: newId ,
          recipientID: req.body.recipientID,
          donorID: req.body.donorID,
          rating: req.body.rating
        })
        .then(function(resp) {
            res.send(resp)
        })
      })

// PUT
    app.put('/recipients/:recipientID', function(req, res) {
      console.log("in dbroutes PUT recp")
      knex('recipients')
        .where('recipients.recipientID', req.params.recipientID)
        .update({
          name: req.body.Name,
          imgURL: req.body.imgURL,
          received: req.body.received,
          target: req.body.target,
          sobStory: req.body.sobStory,
          rating: req.body.rating,
          donorID: req.body.donorID
        })
        .then(function(resp) {
            res.send(resp)
        })
      })

      app.post('/ratings/:recipientID/:donorID', function(req, res) {
        console.log('in put to ratings')
        knex('ratings')
          .where({
              recipientID: req.params.recipientID,
              donorID:  req.params.donorID
            })
          .update({
            recipientID: req.body.recipientID,
            donorID: req.body.donorID,
            rating: req.body.rating
          })
          .then(function(resp) {
              res.send(resp)
          })
        })


}
