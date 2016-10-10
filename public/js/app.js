// wrap entire app in a closure
(function() {
	// module line: name ('store'), and dependencies array (currently empty)
	var app = angular.module('store', []);


	app.controller('StoreController', function() {
		this.products = gems;
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