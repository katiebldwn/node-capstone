var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var app = express();
var router = express.Router();
var db;
var jsonParser = bodyParser.json();

var Schema = mongoose.Schema;

var NewUser = new Schema({
	firstName: String,
	lastName: String
})

var schema = new mongoose.Schema({name: 'string'})

var User = mongoose.model("user", schema);

mongoose.connect("mongodb://User1:User1@ds145019.mlab.com:45019/node-capstone")

app.use(express.static("public"));

app.use(bodyParser.json());

app.get("/getUsers", function(req, res) {
	User.find(function(err, users){
		if(err)
			res.send(err);
		res.json(users);
	})
})

app.post('/addUser', function(req, res) {
	console.log(req.body);
	// // const requiredFields = ['firstName', 'lastName'];
	// // for (var i=0; i<requiredFields.length; i++) {
	// // 	const field = requiredFields[i];
	// // 	if (!(field in req.body)) {
	// // 		const message = 'Missing \`${field}\` in request body'
	// // 		return res.status(400).send(message);
	// // 	}
	// // }
	// const item = NewUser.create(req.body.firstName, req.body.lastName);
	// res.status(201).json(item);
});

app.put('/getUsers/:id', jsonParser, (req, res) => {
	const requiredFields = ['firstName', 'lastName'];
	for (var i=0; i<requiredFields.length; i++) {
		const field = requireFields[i];
		if (!(field in req.body)) {
			const message = `Missing \`${field}\` in request body`
			console.error(message);
			return res.status(400).send(message);
		}
	}
	if (req.params.id !== req.body.id) {
		const message = (
			`Request path id (${req.params.id}) and request body id `
			`(${req.body.id}) must match`);
		console.error(message);
		return res.status(400).send(message);
	}
	console.log('Updating tenant information \`${req.params.id}\`');
	const updatedUser = newUser.update({
		id: req.params.id,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
	});
	res.status(204).json(updatedUser);
});

app.delete('/getUsers/:id', (req, res) => {
	newUser.delete(req.params.id);
	console.log('Deleting user \`${req.params.id}\`');
	res.status(204).end();
});

app.listen(process.env.PORT || 8080);
console.log("listening on port 8080");