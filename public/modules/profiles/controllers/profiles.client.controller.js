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
			}, function() {
				$scope.data = transformData();
				console.log($scope.data);
			});
		};

		$scope.options = {
        chart: {
            type: 'pieChart',
            height: 450,
            donut: true,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
            showLabels: true,

            pie: {
                startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
            },
            transitionDuration: 500,
            legend: {
                margin: {
                    top: 5,
                    right: 70,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };




				// transform data so that it can easily be read with d3
				function transformData(){
				  var courses = $scope.profile.courses;
				  var topicData = {}; //{id:{name:,prob:,numOcc:,sumProb}
					var nodesData = [];
				  // collect data from courses
				  for(var i = 0; i < courses.length; i++){
				    var course = courses[i];
				    console.log(course.topics)
				    for (var j = 0; j < course.topics.length; j++){
				      var topic = course.topics[j];
							var topicRef = topic['topicRef'];
							if (topicRef.name === '') {
								continue;
							}
				      // collect topic information
				      if (topic['_id'] in topicData){

				        topicData[topicRef['_id']]['numOcc'] += 1
				        topicData[topicRef['_id']]['sumProb'] += topicRef['prob']
								console.log( topicData[topicRef['_id']]['sumProb'])
				      }else{

				        topicData[topicRef['_id']] = {'name':topicRef['name'],'category':topicRef['category'],'children':topicRef['topWords'],'numOcc':1,'sumProb':topicRef['prob']}
				      }
				    }
				  } // end of for courses.length

				  // create a bubble for each collected topic
				  for (var topicId in topicData){
				    var newNode = newTopicNode(topicData[topicId])
				    nodesData.push(newNode);
				  }

					return nodesData;
				}

				function newTopicNode(topic){
				    var newNode = {};
				    newNode["id"] = topic["_id"];
				    newNode["category"] = topic["category"];
				    newNode["key"] = topic["name"]
				    newNode["y"] = computeProb(topic);
				    return newNode;
				}

				function computeProb(topic){
					var result = (topic['sumProb']*1./topic['numOcc'])*100;

					//console.log(result);
				  return result;
				}
	}
]);
