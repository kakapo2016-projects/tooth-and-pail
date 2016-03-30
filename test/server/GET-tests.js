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
   directory: __dirname + '/../../migrations',
   tableName: 'migrations'

}

// console.log(config)
var Knex = require('knex')
var knex = Knex(config.development)

// uses the data from the seed database
// before - run the mirgration script
// after - drop the tables

describe('get requests', () => {

  before( function (done) {
    knex.migrate.rollback(config)
     .then(function () {
       return knex.migrate.latest()
        .then(function() {
          return knex.seed.run();
        })
        .then(function() {
          // migrations are finished
          done()
        })
     })
  })

  // after(function (done) {
  //
  //   knex.schema.dropTableIfExists('recipients')
  //     .then(function (){
  //       console.log('dropped recipients')
  //       return knex.schema.dropTableIfExists('donors')
  //     })
  //     .then(function (){
  //       return knex.schema.dropTableIfExists('donations')
  //     })
  //     .then(function (){
  //       return knex.schema.dropTableIfExists('ratings')
  //     })
  //     .then(function () {
  //         console.log('done dropping')
  //     })
  // })

  it('/ returns hello teeth', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200)
      .end(function (err, res) {
    //    console.log(res.text)
        var expectedText = 'hello teeth'
        var actualText = res.text
        expect(err).to.be.null
        expect(actualText).to.equal(expectedText)
        done()
      })
  })
  //recipients
  it('/recipients returns recipients', (done) => {
    request(app)
      .get('/recipients')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        var expected = 'hello teeth'
        var actual = res.body.text
        expect(res.body.length).to.equal(10)
        expect(err).to.be.null
        done()
      })
  })
  it('gets recipient by id', function (done) {
    var expected = {
      recipientID: '1',
      name: 'Jeff',
      imgURL: 'https://i.ytimg.com/vi/OzVaVVjnjEI/maxresdefault.jpg',
      received: 950,
      target: 1000,
      sobStory: 'One day I was walking along happy and carefree and all my teeth fell out.  You would think that that super glue would be better at it\'s job.  Now I haven\'t any teeth and can only gnaw at my food.  Sad that it is I love drinking my vodka and coke.  But without my teeth I can crunch into my favorite snacks.  Please donate to my sad and sorry toothless life.  Or I\'ll sneak into your homes at night and drool on you.  Bacon ipsum dolor amet incididunt pastrami exercitation anim sed ut andouille, strip steak turducken aliquip. Consectetur ut ball tip est short ribs reprehenderit sirloin in. Ipsum quis est strip steak. Duis et sint incididunt, aute nostrud dolore pork loin. Tempor ullamco beef nulla occaecat, short loin ad prosciutto.  Drumstick eiusmod fatback, ut hamburger non ribeye t-bone sirloin in consectetur nisi mollit jerky. Chuck rump spare ribs minim deserunt pork belly capicola, magna officia ut ea. Turducken cow ut cillum. Kielbasa magna irure, pastrami turkey ad t-bone prosciutto fatback cow nulla anim aute leberkas.',
      rating: 1,
      donorID: null,
      createdAt: '2015-02-26 01:22:30'
    }
    request(app)
      .get('/recipients/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        var actualName = res.body.name
        expect(err).to.be.null
        expect(actualName).to.equal(expected.name)
        expect(res.body).to.shallowDeepEqual(expected)
        done()
      })
  })
  // donations
  it('gets the donations', function (done) {
    request(app)
      .get('/donations')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        // console.log(res.body)
        expect( res.body.length).to.equal(25)
        expect(err).to.be.null
        done()
    })
  })
  //  app.get('/donations/:donationID', function(req, res) {
 it('gets donations by donationid', function (done) {
    var expected = {
      donationID: 'd01',
      donorID: '1111',
      recipientID: '1',
      amount: 10,
      createdAt: '2015-02-26 01:22:30'
    }
    request(app)
      .get('/donations/d01')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        // console.log(expected.donorID, res.body.donorID)
        var actual = res.body.donorID
        expect(err).to.be.null
        expect(actual).to.equal(expected.donorID)
        expect(res.body).to.shallowDeepEqual(expected)
        done()
      })
  })
  it('gets donations by donor', function (done) {
    var expected = {
      donationID: 'd01',
      donorID: '1111',
      recipientID: '1',
      amount: 10,
      createdAt: '2015-02-26 01:22:30'
    }
    request(app)
      .get('/donations/donor/1111')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        // console.log(expected, res.body)
        var actual = res.body[0].donationID
        expect(err).to.be.null
        expect(actual).to.equal(expected.donationID)
        expect(res.body[0]).to.shallowDeepEqual(expected)
        done()
      })
  })
  it('gets donations by recipient', function (done) {
    var expected = {
      donationID: 'd01',
      donorID: '1111',
      recipientID: '1',
      amount: 10,
      createdAt: '2015-02-26 01:22:30'
    }
    request(app)
      .get('/donations/recipient/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        var actual = res.body[0].donationID
        expect(err).to.be.null
        expect(actual).to.equal(expected.donationID)
        expect(res.body[0]).to.shallowDeepEqual(expected)
        done()
      })
  })
  // donors
  it('gets all the donors', function (done) {
    request(app)
      .get('/donors')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        // console.log(res.body)
        expect( res.body.length).to.equal(19)
        expect(err).to.be.null
        done()
    })
  })
  it('gets donors by donorID', function (done) {
    var expected = {
      donorID: '1111',
      donorName: 'money-bags',
      passwordHash: 'r111',
      email: 'moneybags@xtra.co.nz',
      createdAt: '2015-02-26 01:22:30'
    }
    request(app)
      .get('/donors/1111')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        // console.log(res.body.donorID, expected.donorID)
        var actual = res.body.donorID
        expect(err).to.be.null
        expect(actual).to.equal(expected.donorID)
        expect(res.body).to.shallowDeepEqual(expected)
        done()
      })
  })
  it('gets donors by donor name', function (done) {
    var expected = {
      donorID: '1111',
      donorName: 'money-bags',
      passwordHash: 'r111',
      email: 'moneybags@xtra.co.nz',
      createdAt: '2015-02-26 01:22:30'
    }
    request(app)
      .get('/donors/name/money-bags')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        // console.log(res.body.donorName, expected.donorName)
        var actual = res.body.donorName
        expect(err).to.be.null
        expect(actual).to.equal(expected.donorName)
        expect(res.body).to.shallowDeepEqual(expected)
        done()
      })
  })
  it('gets donors by email', function (done) {
    var expected = {
      donorID: '1111',
      donorName: 'money-bags',
      passwordHash: 'r111',
      email: 'moneybags@xtra.co.nz',
      createdAt: '2015-02-26 01:22:30'
    }
    request(app)
      .get('/donors/email/moneybags@xtra.co.nz')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        // console.log(res.body.donorName, expected.donorName)
        var actual = res.body.email
        expect(err).to.be.null
        expect(actual).to.equal(expected.email)
        expect(res.body).to.shallowDeepEqual(expected)
        done()
      })
  })

  //ratings
  // the ratings are unseeded
  it('gets the ratings', function (done) {
    var expected = {}
    request(app)
      .get('/ratings')
      .expect(404)
      .end(function (err, res) {
        // console.log(res.body, err)
        expect(res.body).to.be.empty
        expect(err).to.be.null
        done()
    })
  })

  // Tested after the POST test to ratings
  //  '/ratings/:recipientID'
  // '/ratings/:donorID/recipient/:recipientID'
  // '/ratings/:recipientID'


})
