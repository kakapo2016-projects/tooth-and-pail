// CLEANED

import request from 'superagent'

export default function (url, data, callback){
  request.put(url)
	  .send(data)
	  .end(function(err, res) {
	    callback(err, res)
  })
}
