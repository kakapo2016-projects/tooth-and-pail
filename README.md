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

To run NightWatch test:  npm run test:integration


  nodemon dbserver.js // will run on localhost:3000

To run the selenium server manually:
	java -jar selenium-server-standalone-2.52.0.jar -port 4444 -host 127.0.0.1


To disable a nightwatch test from running:  '@disabled': true,

