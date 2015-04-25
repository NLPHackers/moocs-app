'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('profiles').factory('Profiles', ['$resource',
	function($resource) {
		return $resource('profiles/:profileId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
