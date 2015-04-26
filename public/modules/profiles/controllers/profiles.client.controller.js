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

		$scope.profile = {};
		$scope.profile.courses = [];

		$scope.addCourse = function(course) {
			if ($scope.profile.courses.indexOf(course) === -1) {
				$scope.profile.courses.push(course);
			}
		};

		$scope.removeCourse = function(course) {
			var index = $scope.profile.courses.indexOf(course);
			if (index !== -1) {
				$scope.profile.courses.splice(index, 1);
			}
		};

		$scope.create = function() {
			var courseIds = [];
			angular.forEach(this.profile.courses, function (course) {
				courseIds.push(course._id);
			})
			// Create new Article object
			var profile = new Profiles({
				name: this.profile.name,
				email: this.profile.email,
				about: this.profile.about,
				address: this.profile.address,
				courses: courseIds
			});

			// Redirect after save
			profile.$save(function(response) {
				$location.path('profiles/' + response._id);

				// Clear form fields
				$scope.profile.name = '';
				$scope.profile.email = '';
				$scope.profile.about = '';
				$scope.profile.address = '';
				$scope.profile.courses = [];
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.findProfile = function() {
			$scope.profile = Profiles.get({
				profileId: $stateParams.profileId
			});
		};
	}
]);
