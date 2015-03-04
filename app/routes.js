

var Todo = require('./models/todo').Todo;
var Images= require('./models/todo').Images;

// expose the routes to our app with module.exports
module.exports = function(app) {

	app.get('/api/todos', function(req, res) {

	    // use mongoose to get all todos in the database
	    Todo.find(function(err, todos) {

	        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
	        if (err)
	            res.send(err)
	        res.json(todos); // return all todos in JSON format
	    });
	});


	app.get('/api/images', function(req, res) {

	    // use mongoose to get all images in the database
	    Images.find(function(err, images) {

	        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
	        if (err)
	            res.send(err)
	       
	    //res.contentType(doc.img.contentType);
        //res.send(doc.img.data);
		
		
		//res.writeHead(200, {'Content-Type': 'text/html'});
	  	res.write('<html><body><img src="data:image/jpeg,')
	  	res.write('<img src="data:image/jpeg, '+images[0]['profile_picture']+'/>')
	  	//res.write(images[0]['profile_picture']);
	  	//res.end('"/></body></html>');
		

	    });
	});


	app.post('/api/todos', function(req, res) {

	    // create a todo, information comes from AJAX request from Angular
	    Todo.create({
	        text : req.body.text,
	        done : false
	    }, function(err, todo) {
	        if (err)
	            res.send(err);

	        // get and return all the todos after you create another
	        Todo.find(function(err, todos) {
	            if (err)
	                res.send(err)
	            res.json(todos);
	        });
	    });

	});


	app.delete('/api/todos/:todo_id', function(req, res) {
	    Todo.remove({
	        _id : req.params.todo_id
	    }, function(err, todo) {
	        if (err)
	            res.send(err);

	        // get and return all the todos after you create another
	        Todo.find(function(err, todos) {
	            if (err)
	                res.send(err)
	            res.json(todos);
	        });
	    });
	});


	app.get('*', function(req, res) {
	    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});


};

