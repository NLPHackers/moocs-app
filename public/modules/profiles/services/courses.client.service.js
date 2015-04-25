'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('profiles').factory('Courses', ['$resource',
	function($resource) {
		return $resource('courses/:profileId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
