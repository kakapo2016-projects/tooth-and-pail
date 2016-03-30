

module.exports = {

  // Production Database
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    database : 'tooth_and_pail'
  }


//  Server Test Database
  // development: {
  //    client: 'sqlite3',
  //    connection: {
  //      filename: './datastore/tandp.sqlite3'
  //
  //    },
  //    useNullAsDefault: true
  //  },
  //  directory: __dirname + '/migrations-test',
  //  tableName: 'migrations'

}
