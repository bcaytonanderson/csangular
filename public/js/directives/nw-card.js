angular.module("NoteWrangler")
.directive("nwCard", function() {
	// to give each card a number, we can implement a num variable and increment it for each card
	var num = 1;
	return {
		// link's first two auto-injected parameters are scope and element: element refers to the outermost element of the included template (div class="card")

		// link also has an attrs parameter which allows us to access any attrs set on the directive's element

		link: function(scope, element, attrs) {
			// this is where we can use the markdown library, but we have to tell angular that it can trust it to render the html properly using ngBindHtml and $sce
			scope.description = $sce.trustAsHtml(markdown.toHTML(scope.description));
			element.on("click", function() {
				element.("div.card p").toggleClass("hidden");
			});
			// for debugging purposes, we can log an attr like so:
			console.log(attrs.header);
		},
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
			header: "=",

			// the note cards display more than just headers, though. We can set the two-way binding for icon as "=" and pass in as many bindings as we want.
			icon: "=",
			description: "="
		}
	};
});