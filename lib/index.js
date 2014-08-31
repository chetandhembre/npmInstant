/**
 * Created by ichetandhembre on 27/8/14.
 */
var npmTypeAhead = require('./npm-typeahead')
	, npmSuggestion = require('./npm_suggestion')
	, packageView = require('./package-view')

var internals = {}

internals.bindEvent = function () {
	$('#the-basics .search-term').on('blur', function (e) {
		alert('demo')
	})

	$('#the-basics .search-term').on('keypress', function (e) {
		var code = e.keyCode || e.which;
		if(code == 13) { //Enter keycode
			npmSuggestion.renderSuggestion(npmTypeAhead.getCurrentSelection(),  npmTypeAhead.getSuggection())
			packageView.readerPackage('hapi', function() {})
		}
	})
}

$(document).ready(function () {
	internals.bindEvent()
})