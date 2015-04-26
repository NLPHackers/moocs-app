'use strict';

// Articles controller
angular.module('profiles').controller('CoursesController', ['$scope', '$stateParams', '$location', 'Courses',
	function($scope, $stateParams, $location, Courses) {
		$scope.courses = Courses.query();
	}
]);
