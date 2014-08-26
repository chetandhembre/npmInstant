/**
 * Created by ichetandhembre on 27/8/14.
 */

var internals = {}
internals.renderSuggestion = function (currentSelection, data) {
  $('#sidebar').removeClass('hide')
	var $sidebarDiv = $('#sidebar .list-group')
	$sidebarDiv.html('')
	$sidebarDiv.append('<a href="#" class="list-group-item active">'+currentSelection+'</a>')

	for (var i = 0; i < data.length; i++) {

		if (data[i] === currentSelection) {
			continue
		}

		$sidebarDiv.append('<a href="#" class="list-group-item">'+data[i]+'</a>')
	}
}
exports.renderSuggestion = internals.renderSuggestion