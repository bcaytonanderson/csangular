// wrap module in its own closure
(function() {
	// defines the module with a module declaration and setting the module name
	var app = angular.module('store-products', []);
	
	// the dash in the html tag will translate to camelCase in JS
	app.directive('productTitle', function() {
		// returns a directive definition object
		return {
			// configuration options
			// specifies the type of directive; E stands for element here
			restrict: 'E',
			templateUrl: 'product-title.html'

			// if we wanted to make it an attribute directive:
			// restrict: 'A',
			// templateUrl: 'product-title.html'
		};

	});

	app.directive('productPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',

			// to include the controller, pull the logic from the controller written earlier using the controller keyword
			controller:function(){
				this.tab = 1;

				this.selectTab = function(setTab) {
					this.tab = setTab;
				};

				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},

			// specify the controller's alias
			controllerAs: 'panels'
		};
	});

})();