import request from 'superagent'

export default function (geturl, callback) {
	request
		.get(geturl)
		.end(function(err, res) {
			callback(err, res.body)
	})
}
