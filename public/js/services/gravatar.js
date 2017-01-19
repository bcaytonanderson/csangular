angular.module("NoteWrangler")
.factory("Gravatar", function GravatarFactory() {
	var avatarSize = 80; //default size, used later in the url
	var avatarUrl = "http://www.gravatar.com/avatar/"; //used at beginning of each url

	// //can simplify this code
	// return {
	// 	generate: function(email){
	// 		return avatarUrl + CryptoJS.MD5(email) + "?size" + avatarSize.toString();
	// 	}
	// };

	// can simply return the function, and to use it you simply call Gravatar("email@email.com")
	return function(email){
		return avatarUrl + CryptoJS.MD5(email) + "?size" + avatarSize.toString();
	};
});