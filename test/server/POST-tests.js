'use strict'
var chai = require('chai');
chai.use(require('chai-shallow-deep-equal'))
import { expect } from 'chai'
import request from 'supertest'

import app from '../../dbserver/dbserver.js'
import bodyparser from 'body-parser'


var config = {
  development: {
     client: 'sqlite3',
     connection: {
       filename: __dirname + '/../../datastore/tandp.sqlite3'

     },
     useNullAsDefault: true
   },
   directory: __dirname + '/../../migrations-test',
   tableName: 'migrations'

}

// console.log(config)
var Knex = require('knex')
var knex = Knex(config.development)

// uses the data from the seed database
// before - run the mirgration script
// after - drop the tables

describe('post requests', () => {

  it('it can accept a new donation', function (done) {
    let donationData = {
      donorID: '1111',
      recipientID: '2AAA',
      amount: 33
    }
    request(app)
      .post('/donations')
      .send(donationData)
      .end(function(err, res){
        // console.log("post completed", res.body[0])
        // now bring the donation back by the recipient ID to check that it has been entered
        request(app)
          .get('/donations/recipient/2AAA')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            var actual = res.body[0].donorID
            expect(err).to.be.null
            expect(actual).to.equal(donationData.donorID)
            expect(res.body[0]).to.shallowDeepEqual(donationData)
            done()
          })
      })
  })

  it('it can accept a new rating', function (done) {
    let ratingData = {
      recipientID: '2AAA',
      donorID: '1111',
      rating: 3
    }
    request(app)
      .post('/ratings')
      .send(ratingData)
      .end(function(err, res){
        // console.log("post completed", res)
        // now bring the rating back to check that it has been entered
        request(app)
          .get('/ratings/2AAA')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function (err, resp) {
            // console.log(resp.body)
            var actual = resp.body[0].recipientID
            expect(err).to.be.null
            expect(actual).to.equal(ratingData.recipientID)
            expect(resp.body[0]).to.shallowDeepEqual(ratingData)
            done()
          })
      })
  })


  it('it can accept a new recipient', function (done) {
    let recipientData = {
      name: 'Sharon',
      imgURL: 'http://i64.photobucket.com/albums/h182/thetwiggydance/Teeth/34681.jpg',
      received: 0,
      target: 200,
      sobStory: 'This is a sob story',
      donorID: '1111'
    }
    request(app)
      .post('/recipients')
      .send(recipientData)
      .end(function(err, res){
        // now bring back the recipients - there should be one additional record
        request(app)
          .get('/recipients')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            var actual = res.body.length
            expect(err).to.be.null
            expect(actual).to.equal(11)
            done()
          })
      })
  })

  it('it can accept a new donor', function (done) {
    let donorData = {
      donorName: 'Alison',
      password: 'Ally',
      email: 'ally@xtra.co.nz'
    }
    request(app)
      .post('/donors')
      .send(donorData)
      .end(function(err, res){
        // now check that we can bring back the donor from the db
        request(app)
          .get('/donors/name/Alison')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            var actual = res.body.donorName
            expect(err).to.be.null
            expect(actual).to.equal('Alison')
            done()
          })
      })
  })

  /// and finally a PUT to update a recipients
  it('it can update a recipient rating', function (done) {
    let recipientData = {
      rating: 5
    }
    request(app)
      .post('/donors')
      .send(donorData)
      .end(function(err, res){
        // now check that we can bring back the donor from the db
        request(app)
          .get('/donors/name/Alison')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            var actual = res.body.donorName
            expect(err).to.be.null
            expect(actual).to.equal('Alison')
            done()
          })
      })
  })



  app.put('/recipients/:recipientID', function(req, res) {
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

        // console.log("in routes", resp)
        res.send(resp)
    })
  })


})
