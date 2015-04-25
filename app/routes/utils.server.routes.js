'use strict';

/**
 * Module dependencies.
 */
var utils = require('../../app/controllers/utils.server.controller');

module.exports = function(app) {
	app.route('/reset')
		.get(utils.reset);
};
