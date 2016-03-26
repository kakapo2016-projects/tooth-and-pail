var request = require('superagent')

module.exports = function (url, data, callback){
  console.log('in PUT', url, data)
  request.put(url)
  .send(data)
  .end(function(err, res){
    //callback(err, res)
  })
}
