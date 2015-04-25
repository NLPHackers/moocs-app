'use strict';

// Articles controller
angular.module('profiles').controller('ProfilesController', ['$scope', '$stateParams', '$location', '$http', 'Profiles',
	function($scope, $stateParams, $location, $http, Profiles) {
		$scope.getAddress = function(viewValue) {
			var params = {address: viewValue, sensor: false};
			return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
			.then(function(res) {
				return res.data.results;
			});
		};

		$scope.courses = [];

		$scope.addCourse = function(course) {
			if ($scope.courses.indexOf(course) === -1) {
				$scope.courses.push(course);
			}
		};

		$scope.removeCourse = function(course) {
			var index = $scope.courses.indexOf(course);
			if (index !== -1) {
				$scope.courses.splice(index, 1);
			}
		};
	}
]);
