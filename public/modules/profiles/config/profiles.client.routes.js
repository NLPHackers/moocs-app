'use strict';

// Setting up route
angular.module('profiles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('create', {
			url: '/create',
			templateUrl: 'modules/profiles/views/create-profile.client.view.html'
		});
	}
]);