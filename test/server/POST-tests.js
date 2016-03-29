'use strict'
var chai = require('chai');
chai.use(require('chai-shallow-deep-equal'))
import { expect } from 'chai'
import request from 'supertest'

import app from '../../dbserver/dbserver.js'
import bodyparser from 'body-parser'


describe('post requests', () => {

  //app.post('/donors', function(req, res) {
  //  app.post('/donations', function(req, res) {

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

})
