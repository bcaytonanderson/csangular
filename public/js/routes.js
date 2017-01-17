(function() {

	// allows us to specify routes
	angular.module('NoteWrangler').config(function($routeProvider){

		// defining the first route
		$routeProvider.when('/notes', {
			templateUrl: '/templates/pages/notes/index.html',
			// for inline linking, define the controller here, with the route definition; this can get very lengthy
			// controller: function() {}

			// to use our Outisde Route Controller (js/controllers/notes-index-controller.js):
			controller: 'NotesIndexController',
			controllerAs: 'indexController'
		})
		.when('/notes/new', {
			templateUrl: 'templates/pages/notes/edit.html',
		})

		// the : indicates a route parameter
		.when('/notes/:id', {
			templateUrl: 'templates/pages/notes/show.html',
			controller: 'NotesShowController',
			controllerAs: 'showController'
		})

		// chaining on more .when() methods to declare more routes
		.when('/users', {
			tempalteUrl: 'templates/pages/users/index.html',
		})

		// when the route is to our main index, render the notes/index.html template
		.when('/', {
			tempalteUrl: 'tempaltes/pages/notes/index.html',
		})

		// use .otherwise to set route definition that will be used on route change when no other route definition is matched
		.otherwise( { redirectTo: '/' });

	});
})();