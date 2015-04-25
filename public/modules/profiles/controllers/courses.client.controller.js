'use strict';

// Articles controller
angular.module('profiles').controller('CoursesController', ['$scope', '$stateParams', '$location', 'Courses',
	function($scope, $stateParams, $location, Courses) {
		//$scope.find = function() {
		$scope.courses = Courses.query();
		//};
		//$scope.courses = [{"source": "coursera", "video": "4cb0a880fc6111e3950b43bf39aa1bfd", "name": "Social Entrepreneurship", "image": "https://d15cw65ipctsrr.cloudfront.net/fa/b623100b2a11e491808b11e17df7d4/S-ent-pic.jpg", "instructors": [], "topics": [], "affiliates": [{"image": "https://coursera-university-assets.s3.amazonaws.com/a1/26dc9b1295b7f1b521b1fa92d3873c/cbs-coursera-logo-square__1280x1280px.png", "name": "Copenhagen Business School", "id": 175}], "description": "In this course you will learn how to create societal impact through Social Entrepreneurship (S-ENT). S-ENT describes the discovery and sustainable exploitation of opportunities to create social change. We will introduce you to S-ENT examples and guide you through the process of identifying an opportunity to address social problems as well as outlining your idea in a business plan."}, {"source": "coursera", "video": "b4a3720051ad11e4b9b5a3dfc6bb5731", "name": "Preparing for the AP* Calculus AB and BC Exams (Part 1 - Differential Calculus)", "image": "https://d15cw65ipctsrr.cloudfront.net/3b/2cdfe0352b11e4aa8ec52e28a42c7f/calcMOOCpart1.png", "instructors": [], "topics": [], "affiliates": [{"image": "https://coursera-university-assets.s3.amazonaws.com/97/72aa1ac12339885a80230fd485cf50/UHS_square.png", "name": "University of Houston System", "id": 119}], "description": "This is a 6 week course covering the first part of AP* Calculus which includes limits, derivatives and applications.\n\n* AP Calculus is a registered trademark of the College Board, which was not involved in the production of, and does not endorse, this product."}, {"source": "coursera", "video": "7c591010594311e4bf5569a734f5e352", "name": "Time to Reorganize! Understand Organizations, Act, and Build a Meaningful World.", "image": "https://d15cw65ipctsrr.cloudfront.net/57/7b9480553211e493ca9f70c55d4ceb/TimeToReorganize-MainLogo.jpg", "instructors": [], "topics": [], "affiliates": [{"image": "https://coursera-university-assets.s3.amazonaws.com/22/550d648c7b6cc7f03560b8088dac60/HECLogoBaseline720x720-Coursera.png", "name": "HEC Paris", "id": 161}], "description": "We are in constant relationship with many organizations. Our world is submitted to regular changes as organizations evolve, come and go. Understanding your memberships and attachments to organizations will help you act on your world. You'll learn how to evaluate the influence of organizations around you and how to transform your relationships to reach a stronger coherence."}, {"source": "coursera", "video": "RSTMmdYSPFY", "name": "Writing II: Rhetorical Composing", "image": "https://d15cw65ipctsrr.cloudfront.net/ee/fcde20352c11e49d32519928fb33e3/Writing2-Rhetorical-Composing.png", "instructors": ["Susan Delagrange", " Cynthia Selfe", " Kay Halasek", " Ben McCorkle ", " Scott  Lloyd  DeWitt"], "topics": [], "affiliates": [{"image": "https://coursera-university-assets.s3.amazonaws.com/cc/c35e7fa199fd948a8eb6acb8c249c8/OSU-coursera-squareFront.png", "name": "The Ohio State University", "id": 28}], "description": "Rhetorical Composing engages you in a series of interactive reading, research, and composing activities along with assignments designed to help you become more effective consumers and producers of alphabetic, visual and multimodal texts.\n\nJoin us to become more effective writers... and better citizens."}, {"source": "coursera", "video": "78a175c02d9211e49976d39a32b7796d", "name": "Introduction to Electronics", "image": "https://d15cw65ipctsrr.cloudfront.net/43/09c5d0352a11e4af4bdd0c6ca4b30a/Ferri-icon-electronics.png", "instructors": [], "topics": [], "affiliates": [{"image": "https://coursera-university-assets.s3.amazonaws.com/27/a693dcb342a1ed209fdb0c2de7e6a3/GT-Coursera-logo-square.png", "name": "Georgia Institute of Technology", "id": 9}], "description": "This course introduces students to the basic components of electronics: diodes, transistors, and op amps.  It covers the basic operation and some common applications.  "}, {"source": "udacity", "video": "https://www.udacity.com/course/ud436?utm_medium=referral&utm_campaign=api", "name": "Computer Networking", "image": "https://lh3.ggpht.com/PwqnZYeOVbWr4a3Qn3WkmZNzRlf6acf7EbQoGCBAqrmn1pOFrsX5vVr4WUHGTOaqslvjDY864Q8X2-o9ENU=s0#w=1725&h=1060", "instructor": ["Nick Feamster"], "topics": [], "affiliates": [{"image": "https://lh4.ggpht.com/nGlPuZaZ6BbR23QfhSVNT_Sd_U45RnUECVGhx-cKIlo3D_Onofn-nWpV3sEYEQsczb7tC4JhggdGYyhAAQ4I=s0#w=130&h=60", "name": "Georgia Institute of Technology", "id": ""}], "description": "This is an advanced Computer Networking course that delves into the latest concepts and tools used by the CN industry."}, {"source": "udacity", "video": "https://www.udacity.com/course/ud805?utm_medium=referral&utm_campaign=api", "name": "Software Development Process", "image": "https://lh4.ggpht.com/ghBERRE992L2Ueec3QyDH5xPVoNztaQvTTZ9POSDbZRAmYXoFiGN2TROmzJnP8hWIB05NM219nDWQrnSVw=s0#w=1724&h=1060", "instructor": ["Alex Orso"], "topics": [], "affiliates": [{"image": "https://lh4.ggpht.com/nGlPuZaZ6BbR23QfhSVNT_Sd_U45RnUECVGhx-cKIlo3D_Onofn-nWpV3sEYEQsczb7tC4JhggdGYyhAAQ4I=s0#w=130&h=60", "name": "Georgia Institute of Technology", "id": ""}], "description": "Software Development Processes explores requirements engineering, architecture and design, testing, and software quality in general."}, {"source": "udacity", "video": "https://www.udacity.com/course/cs373?utm_medium=referral&utm_campaign=api", "name": "Artificial Intelligence for Robotics", "image": "https://lh4.ggpht.com/dTaG60Lui_XeUUEDkZsIp7-RP7g6SLNWyHG9bbaZG2yDp24Mnc6R2tjzME5WNLlJdi6IJQM-YCwO_gEzug=s0#w=436&h=268", "instructor": ["Sebastian Thrun"], "topics": [], "affiliates": [{"image": "https://lh4.ggpht.com/nGlPuZaZ6BbR23QfhSVNT_Sd_U45RnUECVGhx-cKIlo3D_Onofn-nWpV3sEYEQsczb7tC4JhggdGYyhAAQ4I=s0#w=130&h=60", "name": "Georgia Institute of Technology", "id": ""}], "description": "Learn how to program all the major systems of a robotic car. Topics include planning, search, localization, tracking, and control."}, {"source": "udacity", "video": "https://www.udacity.com/course/ud032?utm_medium=referral&utm_campaign=api", "name": "Data Wrangling with MongoDB", "image": "https://lh3.ggpht.com/ll9ungBQPIwG1u5WHYyB_q-CO6gAzJC-fT3xotaS5DV3UbNZ7Xdz6b5T3Jpl7aEfmVEY2gjvkkt7KzWVeIo=s0#w=1724&h=1060", "instructor": ["Shannon Bradshaw"], "topics": [], "affiliates": [{"image": "https://lh5.ggpht.com/qeCf6nazB7BWSdHvcW8ldywfblLGcv9Fkw8_jeVfT5Bf2DrQPjnuHrem2wo3oyif0NuU47yMcX67ceH5hq4=s0#w=130&h=60", "name": "MongoDB", "id": ""}], "description": "Data Scientists spend most of their time cleaning data. In this course, you will learn to convert and manipulate messy data to extract what you need."}, {"source": "udacity", "video": "https://www.udacity.com/course/ud919?utm_medium=referral&utm_campaign=api", "name": "Model Building and Validation", "image": "https://lh4.ggpht.com/kYr0sxkZKUC3-xlCQHRB1aH9Sr7BibEsBSNLPLJykneum-CnGeecsH-10yzsbbnLYMcM9-uIoGWacJ7HHw=s0#w=1071&h=659", "instructor": ["Don Dini", "Rishi Pravahan"], "topics": [], "affiliates": [{"image": "https://lh6.ggpht.com/gMNRaCIUrZaeSZjBQnBD7Cc54N0Ykk0stm-rMKqZcvNW6AnATbJY2NgRdyeVy0Hiq3xT5MmoSSdflMFo-NY=s0#w=130&h=60", "name": "AT&T", "id": ""}], "description": "This course will teach you how to start from scratch in understanding and paying attention to what is important in the data and how to answer questions about data"}];
	}
]);
