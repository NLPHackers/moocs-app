'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	_ = require('lodash'),
	//topicData = require( '../seed/topics.json');
  courseData = require( '../seed/courses.json');

// https://gist.github.com/bclinkinbeard/5171359
exports.reset = function( req, res ) {

    // get refs to the models we defined above
    var Topic = mongoose.model('Topic');
    var Course = mongoose.model('Course');

    // clear all existing documents from the collections
    Topic.find().remove().exec();
    Course.find().remove().exec();

    // populate the foods collection from json data
    // nothing fancy here as Food documents do not reference anything else
    /*for( var i = 0; i < topicData.length; i++ ) {
        new Topic( topicData[ i ] ).save();
    }*/


		for( var i = 0; i < courseData.length; i++ ) {
				new Course( courseData[ i ] ).save();
		}


    res.redirect('/');
};
