import Url from 'url'
import dotenv from 'dotenv'

var config ={
  development: {
    protocol: 'http:',
    slashes: true,
    host: 'localhost',
    port: 3000
  },
  production : {
    protocol: 'http:',
    slashes: true,
    host: 'toothandpaildb.herokuapp.com',
    port: process.env.PORT
  }
}

console.log("this url", Url.format(config[process.env.NODE_ENV]))

export const url = Url.format(config[process.env.NODE_ENV])