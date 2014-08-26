/**
 * Created by ichetandhembre on 27/8/14.
 */
var typeahead = require('typeahead.js')
	, _         = require('lodash')

var internals = {}


internals.parseSuggestionReturn = function (value) {
  var obj;
	internals.suggestions = []
	for (var i = 0; i < value.length; i++) {
    obj = value[i]
		internals.suggestions = internals.suggestions.concat(_.values(obj))
  }
}

$(document).ready(function () {
	var bestPictures = new Bloodhound({
		datumTokenizer: function(d) {
			return Bloodhound.tokenizers.whitespace(d.val);
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url : 'https://typeahead.npmjs.com/search?q=%QUERY',
			filter : function () {
				internals.parseSuggestionReturn(arguments[0])
				return arguments[0]}
		}
	});

	bestPictures.initialize();

	$('#the-basics .search-term').typeahead(null, {
		name: 'value',
		displayKey: 'value',
		source: bestPictures.ttAdapter()
	});
})

exports.getCurrentSelection = function () {
	return $('#the-basics .search-term').typeahead('val')
}

exports.getSuggection = function() {
	return internals.suggestions
}