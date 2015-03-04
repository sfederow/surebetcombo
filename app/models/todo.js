

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = mongoose.model('Todo', {
    			text : String,
    			done : Boolean
			});

var Images = mongoose.model('Images', 
               				new Schema({ first_name: String, 
               							 last_name: String, 
               							 profile_picture: String}), 
               				'images');  

module.exports = {
	Todo: Todo,
	Images: Images,
}