
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Images = mongoose.model('Images', 
               				new Schema({ first_name: String, 
               							 last_name: String, 
               							 profile_picture: String}), 
               				'images');    