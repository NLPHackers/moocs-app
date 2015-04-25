'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Profile Schema
 */
var CourseSchema = new Schema({
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
	source: {
		type: String,
		default: '',
		trim: true
	},
	video: {
		type: String,
		default: '',
		trim: true
	},
	image: {
		type: String,
		default: '',
		trim: true
	},
	affiliates: [{
		name: {
			type: String,
			default: '',
			trim: true
		},
		image: {
			type: String,
			default: '',
			trim: true
		},
	}],
	instructors: [{
		type: String
	}],
	topics: [{
		name: {
			type: Schema.ObjectId,
			ref: 'Topic'
		},
		probability: {
			type: String,
			default: 0
		},
	}],
});

mongoose.model('Course', CourseSchema);
