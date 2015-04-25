'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Profile Schema
 */
var TopicSchema = new Schema({
	_id: Schema.Types.Mixed,
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		default: '',
		trim: true
	},
	category: {
		type: String,
		default: '',
		trim: true
	},
	topwords: [{
		word: {
			type: String,
			default: '',
			trim: true
	  },
		probability: {
			type: String,
			default: 0
		}
	}],
	topbigrams: [{
		bigram: {
			type: String,
			default: '',
			trim: true
	  },
		prob: {
			type: String,
			default: 0
		}
	}],
});

mongoose.model('Topic', TopicSchema);
