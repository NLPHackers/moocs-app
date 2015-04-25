'use strict';

/**
 * Module dependencies.
 */
var profiles = require('../../app/controllers/profiles.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/profiles')
		.post(profiles.create);

	app.route('/profiles/:profileId')
		.get(profiles.get);

	app.param('profileId', profiles.profileByID);
};
