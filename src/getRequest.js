var request = require('superagent')

module.exports = function getRequest(geturl, callback) {
	request
		.get(geturl)
		.end(function(err, res){
			console.log('in get req', res.body)
			callback(err, res.body)
		})
}
