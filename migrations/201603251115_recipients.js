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
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipients')
    .then(function () {
        process.exit()
    })
}
