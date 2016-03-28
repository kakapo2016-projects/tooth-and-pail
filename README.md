# tooth-and-pail
crowd sourced tooth fixes

step 1:
run npm install

step 2:
run npm start

step 3:
npm test

To CREATE database  - install KNEX globally
                    - in the terminal run knex migrate:latest
                    -                 run knex seed:run    

To run the db server - in /dbserver
<<<<<<< HEAD
                        nodemon dbserver.js      - will run on localhost:3000

To run NightWatch test:  npm run test:integration


  nodemon dbserver.js // will run on localhost:3000

To run the selenium server manually:
	java -jar selenium-server-standalone-2.52.0.jar -port 4444 -host 127.0.0.1

Google test for nightwatch:
module.exports = {
  'demo test google' : function (client) {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 1000);
  },

  'part two' : function(client) {
    client
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
