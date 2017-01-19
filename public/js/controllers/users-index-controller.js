angular.module("NoteWrangler")
.controller("UsersIndexController", function($scope, Gravatar) {
	$scope.gravatarUrl = function(email) {
		return Gravatar(email);
	}
});