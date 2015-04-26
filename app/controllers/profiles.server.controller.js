'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Profile = mongoose.model('Profile'),
	Topic = mongoose.model('Topic'),
	_ = require('lodash');

/**
 * Create a profile
 */
exports.create = function(req, res) {
	console.log(req.body);
	var profile = new Profile(req.body);

	profile.save(function(err) {
		if (err) {
			console.log(err);
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log(profile);
			res.json(profile);
		}
	});
};

exports.get = function(req, res) {
	console.log(req.profile);
	res.json(req.profile);
};


/**
 * Profile middleware
 */
exports.profileByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Profile is invalid'
		});
	}

	Profile.findById(id).populate('courses courses.topics').exec(function(err, profile) {
		if (err) return next(err);
		if (!profile) {
			return res.status(404).send({
				message: 'Profile not found'
			});
		}
		var options = {
			path: 'courses.topics.topicRef'
		};
		Topic.populate(profile, options, function (err, result) {
			if (err) return next(err);
			req.profile = result;
			next();
		})

	});
};
