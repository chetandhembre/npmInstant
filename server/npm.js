/**
 * Created by ichetandhembre on 31/8/14.
 */

var request = require('request')

var internals = {}

internals.fetchPackage = function (package) {
  return request('http://registry.npmjs.org/hapi')
}

exports.fetchPackage = internals.fetchPackage