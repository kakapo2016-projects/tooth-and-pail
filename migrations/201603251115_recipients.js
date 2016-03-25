exports.up = function(knex, Promise) {
  console.log('up')
  return knex.schema.createTableIfNotExists('recipients', function (table) {
    console.log('creating table: recipients')
    table.varchar('recipientID').primary()
    table.string('name')
    table.string('imgURL')
    table.integer('received')
    table.integer('target')
    table.string('sobStory')

    })
    .then(function (){
      return knex.schema.createTableIfNotExists('donors', function (table) {
        console.log('creating table: donors')
        table.varchar('donorID').primary()
        table.string('donorName')
        table.string('passwordHash')
        table.string('email')
        })
    })
    .then(function (){
      return knex.schema.createTableIfNotExists('donations', function (table) {
        console.log('creating table: donations')
        table.varchar('donationID').primary()
        table.varchar('donorID')
        table.varchar('recipientID')
        table.integer('amount')
        table.timestamp('timeStamp')
        })
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipients')
    .then(function () {
        process.exit()
    })
}
