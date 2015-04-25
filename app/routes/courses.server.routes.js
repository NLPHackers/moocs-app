'use strict';

/**
 * Module dependencies.
 */
var courses = require('../../app/controllers/courses.server.controller');

module.exports = function(app) {
	app.route('/courses')
		.get(courses.list);

	app.param('courseId', courses.courseByID);
};
