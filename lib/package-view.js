/**
 * Created by ichetandhembre on 31/8/14.
 */

var marked = require('marked')
var hljs   = require('highlight.js')
var jade   = require('jade')
var npm    = require('./npm')
var fs     = require('fs')


var internals = {}

internals.temlate = fs.readFileSync('./lib/github.jade')

marked.setOptions({
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	highlight: function (code) {
		return hljs.highlightAuto(code).value;
	}
});


internals.renderPackage = function (packageName, callback) {

	npm.fetchPackageDetails(packageName, function (err, res) {
		if (err) {
			return callback(err)
		} else {
			readme = res['readme']

			marked(readme, function (error, content) {
				 if (error) {
					 throw error;
				 }

				 jade.render(internals.temlate, {
				  	pretty: true,
				  	title: 'demo',
				  	content: content
				 }, function (error, html) {
				  	if (error) {
				 	  	throw error;
					  }
					  $('.js-package .js-readme').html(html)
					  callback(null)
				 });
			})
		}
	})
}

exports.readerPackage = internals.renderPackage

