'use strict';

//Setting up route
angular.module('elearning').config(['$stateProvider',
	function($stateProvider) {
		// Elearning state routing
		$stateProvider.
		state('learnroute', {
			url: '/learn',
			templateUrl: 'modules/elearning/views/learnroute.client.view.html'
		});
	}
]);