/**
 * Created by ichetandhembre on 27/8/14.
 */
var npmTypeAhead = require('./npm-typeahead')
	, npmSuggestion = require('./npm_suggestion')

var internals = {}

internals.bindEvent = function () {
	$('#the-basics .search-term').on('blur', function (e) {
		alert('demo')
	})

	$('#the-basics .search-term').on('keypress', function (e) {
		var code = e.keyCode || e.which;
		if(code == 13) { //Enter keycode
			npmSuggestion.renderSuggestion(npmTypeAhead.getCurrentSelection(),  npmTypeAhead.getSuggection())
		}
	})
}

$(document).ready(function () {
	internals.bindEvent()
})