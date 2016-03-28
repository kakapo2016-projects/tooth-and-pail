module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'tooth_and_pail'
    },
    useNullAsDefault: true
  },

  production: {
  client: 'pg',
  connection: {
    url: process.env.DATABASE_URL,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    user:     process.env.DBUSER,
    password: process.env.DBPASSWORD
  },
  directory: __dirname + '/migrations',
  tableName: 'migrations'
  }
}
