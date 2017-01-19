angular.module("NoteWrangler")
.directive("nwCard", function() {
	// to give each card a number, we can implement a num variable and increment it for each card
	var num = 1;
	return {
		restrict: 'E',
		templateUrl: "templates/directives/nw-card.html",
		// controller: function() {
		// 	this.header = "Note Title";
		// },

		// to isolate the scope, we can pass a scope key an empty object:
		// scope: {},

		// another way to implement the controller is to us $scope
		// controller: function($scope) {
		// 	$scope.header = "Note Title" + num++;
		// },

		// using scope, we no longer need the controller alias
		// controllerAs: "card"

		// we need to tell our directive it might receive a header variable, and if so, to bind it to the scope:
		scope: {
			// this tells the directive we are passing in a string.
			header: "@",

			// the note cards display more than just headers, though. We can set the two-way binding for icon as "=" and pass in as many bindings as we want.
			icon: "="
		}
	};
});