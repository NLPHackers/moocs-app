'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Profile = mongoose.model('Profile'),
	_ = require('lodash');

/**
 * Create a profile
 */
exports.create = function(req, res) {
	var profile = new Profile(req.body);

	profile.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(profile);
		}
	});
};

exports.get = function(req, res) {
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

	Profile.findById(id).populate('name', 'email').exec(function(err, profile) {
		if (err) return next(err);
		if (!profile) {
			return res.status(404).send({
				message: 'Profile not found'
			});
		}
		req.profile = profile;
		next();
	});
};
