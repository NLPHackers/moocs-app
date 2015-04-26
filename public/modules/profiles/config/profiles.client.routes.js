'use strict';

// Setting up route
angular.module('profilesUser').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('create', {
			url: '/create',
			templateUrl: 'modules/profiles/views/create-profile.client.view.html'
		}).
		state('showProfile', {
			url: '/profiles/:profileId',
			templateUrl: 'modules/profiles/views/profile.client.view.html'
		});
	}
]);
