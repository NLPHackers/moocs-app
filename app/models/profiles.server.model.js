'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Profile Schema
 */
var ProfileSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		default: '',
		trim: true
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	email: {
		type: String,
		default: '',
		trim: true
	},
	about: {
		type: String,
		default: '',
		trim: true
	},
	courses: [{ type : Schema.ObjectId, ref: 'Course' }]
});

mongoose.model('Profile', ProfileSchema);
