angular.module("NoteWrangler")
.controller("NotesEditController", function($scope, $html) {
	$scope.updateNote = function(noteObj) {
		// this code is fine, but it is not reusable in other parts of the app
		$html({method: "PUT", url: "/notes", data: noteObj})
	};
});