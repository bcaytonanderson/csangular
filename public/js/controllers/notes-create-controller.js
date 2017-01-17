angular.module('NoteWrangler')
.controller('NotesCreateController', function($http) {

	var controller = this;

	this.saveNote = function(note) {
		// in case the post fails
		controller.errors = null;

		$http({method: 'POST', url: '/notes', data: note})
		// using the catch callback, make error messages available to the template for display.
		.catch(function(note) {
			controller.errors = note.data.error;
		})
	};


});