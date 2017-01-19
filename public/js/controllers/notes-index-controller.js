angular.module('NoteWrangler')
.controller('NotesIndexController', function($scope, Note) {
	// $http({method: 'GET', url: '/notes'})

	// now that we have the factory for our $html functions:
	Note.all().success(function(data) {
		$scope.notes = data;
	});
});