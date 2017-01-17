(function() {

	// allows us to specify routes
	angular.module('NoteWrangler').config(function($routeProvider){

		// defining the first route
		$routeProvider.when('/notes', {
			templateUrl: '/templates/pages/notes/index.html',
		})
		.when('/notes/new', {
			templateUrl: 'templates/pages/notes/edit.html',
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