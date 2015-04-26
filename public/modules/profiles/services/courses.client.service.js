'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('profilesUser').factory('Courses', ['$resource',
	function($resource) {
		return $resource('courses/:profileId', {
			courseId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
