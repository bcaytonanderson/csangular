// wrap entire app in a closure
(function() {
	// module line: name ('store'), and dependencies array (currently empty)
	var app = angular.module('store', []);

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

	app.controller('StoreController', function() {
		this.products = gems;
	});

	// controller to handle the tab logic, instead of having it in HTML
	app.controller("PanelController", function() {
		// sets an initial value for the active tab.
		this.tab = 1;

		// function that takes the tab value as an argument and sets the active tab accordingly.
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		// function for comparison
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: '. . .',
			images: [
					{
						full: 'dodecahedron-01-full.jpg',
						thumb: 'dodecahedron-01-thumb.jpg'
					},
					{
						full: 'dodecahedron-02-full.jpg',
						thumb: 'dodecahedron-02-thumb.jpg'
					}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			],
			canPurchase: true,
			soldOut: true,
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '. . .',
			canPurchase: false,
		}
	];

})();