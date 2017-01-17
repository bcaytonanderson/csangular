angular.module('NoteWrangler')
.controller('NotesShowCOntroller', function($http, $routeParams) {

	var controller = this;

	// create GET request which appends the specified parameter to the url
	$http({method: 'GET', url: '/notes/' + $routeParams.id})
	.success(function(data) {
		controller.note = data;
	})

});