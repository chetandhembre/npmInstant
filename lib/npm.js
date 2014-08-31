/**
 * Created by ichetandhembre on 31/8/14.
 */


var request = require('request')

var internals = {}

internals.fetchPackageDetails = function (packagename, cb) {
	$.ajax({
		   url : '/package/' + packagename
		,  type : 'GET'
		, dataType : 'JSON'
		,  success: function (data) {
			   return cb(null, data)
		   }
	})
}


exports.fetchPackageDetails = internals.fetchPackageDetails