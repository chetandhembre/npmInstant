/**
 * Created by ichetandhembre on 31/8/14.
 */

var wreck = require('wreck')

var internals = {}

internals.package = function (req, reply) {
	var packageName = req.params.package
	wreck.request('GET', 'http://registry.npmjs.org/' + packageName, {}, reply)
}

exports.package = internals.package