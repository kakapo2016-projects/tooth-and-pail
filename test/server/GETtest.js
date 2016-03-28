'use strict'
var expect = require('chai').expect
var request = require('supertest')
var app = require('../../dbserver/dbserver.js')

describe('GET /', function () {

  it('responds with a welcome text', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function (err, res) {
        var expectedText = 'hello teeth'
        var actualText = res.text
        expect(err).to.be.null
        expect(actualText).to.equal(expectedText)

        done()

      })
  })
})
