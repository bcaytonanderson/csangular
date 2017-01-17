// wrap entire app in a closure
(function() {
	// module line: name ('store'), and dependencies array (currently empty)
	// now that we have another module, we need to tell this one that it depends on the new one.
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', [ '$http',function($http) {
		// this.products = gems;

		// using built-in $http service, make a request to products.json, and will retuern a Promise object with .success() and .error()
		// $http({ method: 'GET', url: '/products.json'});

		// SHORTCUT METHOD:
		// create a variable and set it to 'this' so we can access its scope within the service function.
		var store = this;

		// init products to an empty array, since the page will render before the data returns from the get request.
		store.products = [];

		// uses the $http service, which returns a Promise; .success() callback gets the data
		$http.get('/products.json').success(function(data) {
			// makes the data available to the store
			store.products = data;
		});

		}]);

	// good practice to initialize all variables
	app.controller('ReviewController', function() {
		// initializes as an empty object
		this.review = {};

		this.addReview = function(product) {
			// adds a new review to the product's review array
			product.reviews.push(this.review);
			// clears the review form by setting review to an empty object
			this.review = {};
		};
	});

	// controller to handle the tab logic, instead of having it in HTML (moved to products.js)
	// app.controller("PanelController", function() {
		// // sets an initial value for the active tab.
		// this.tab = 1;

		// // function that takes the tab value as an argument and sets the active tab accordingly.
		// this.selectTab = function(setTab) {
		// 	this.tab = setTab;
		// };

		// // function for comparison
		// this.isSelected = function(checkTab) {
		// 	return this.tab === checkTab;
		// };
	// });

	// we will pull this out from the module and store it in a JSON file.
	// var gems = [
	// 	{
	// 		name: 'Dodecahedron',
	// 		price: 2,
	// 		description: '. . .',
	// 		images: [
	// 				{
	// 					full: 'dodecahedron-01-full.jpg',
	// 					thumb: 'dodecahedron-01-thumb.jpg'
	// 				},
	// 				{
	// 					full: 'dodecahedron-02-full.jpg',
	// 					thumb: 'dodecahedron-02-thumb.jpg'
	// 				}
	// 		],
	// 		reviews: [
	// 			{
	// 				stars: 5,
	// 				body: "I love this product",
	// 				author: "joe@thomas.com"
	// 			},
	// 			{
	// 				stars: 1,
	// 				body: "This product sucks",
	// 				author: "tim@hater.com"
	// 			}
	// 		],
	// 		canPurchase: true,
	// 		soldOut: true,
	// 	},
	// 	{
	// 		name: 'Pentagonal Gem',
	// 		price: 5.95,
	// 		description: '. . .',
	// 		canPurchase: false,
	// 	}
	// ];

})();