/**
 * Created by ichetandhembre on 27/8/14.
 */

var Hapi = require('hapi')
	, path = require('path')
	, handler = require('./server/handler')
	, server

// Declare internals
var internals = {};
internals.css = function (request) {
	return './www/css/';
};

internals.js = function (request) {
	return './www/js/';
};

internals.main = function () {
	var server = new Hapi.Server(8000, { files: { relativeTo: __dirname } });
	server.route([
		{ method: 'GET', path: '/css/{path}', handler: { directory: { path: internals.css } } },
		{ method: 'GET', path: '/js/{path}', handler: { directory: { path: internals.js } } },
		{ method: 'GET', path: '/{path?}', handler: { directory: { path: './www/' } } },
		{   method: 'GET'
			, path: '/package/{package}'
			, handler: handler.package
		}
	]);
	server.start();
};
internals.main();
