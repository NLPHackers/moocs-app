'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Course = mongoose.model('Course'),
	_ = require('lodash');

/**
 * Create a profile
 */
exports.create = function(req, res) {
	var course = new Course(req.body);

	course.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(course);
		}
	});
};

exports.get = function(req, res) {
	res.json(req.course);
};

exports.list = function(req, res) {
	Course.find().sort('name').exec(function(err, courses) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(courses);
		}
	});
};
/**
 * Profile middleware
 */
exports.courseByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Course is invalid'
		});
	}

	Course.findById(id).exec(function(err, profile) {
		if (err) return next(err);
		if (!profile) {
			return res.status(404).send({
				message: 'Course not found'
			});
		}
		req.profile = profile;
		next();
	});
};
