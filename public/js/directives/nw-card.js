angular.module("NoteWrangler")
.directive("nwCard", function() {
	return {
		restrict: 'E',
		templateUrl: "templates/directives/nw-card.html",
		// controller: function() {
		// 	this.header = "Note Title";
		// },

		// another way to implement the controller is to us $scope
		controller: function($scope) {
			$scope.header = "Note Title";
		},
		// using scope, we no longer need the controller alias
		// controllerAs: "card"
	};
});