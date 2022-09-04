//jshint eversion:6

var express = require("express");

var database = require('./database');

var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/Login.html", function(req, res){
    req.sendFile(__dirname + "/Login.html");
});

app.get("/SignUp", function(req, res){
    res.sendFile("/SignUp.html");
});

app.get("/NewsletterData", function(request, response, next){

	var query = "SELECT * FROM newsletter ORDER BY id DESC";

	database.query(query, function(error, data){


		if(error)
		{
			console.log(error);
			throw error; 
		}
		else
		{
			console.log("Rendering Page");


			response.render('NewsletterData', {title:'Node.js MySQL CRUD Application', action:'list', newsletterData});
			
			
			console.log("Rendering Page-end");
		}

	});


});

module.exports = app;


app.listen(2000, function(){
    console.log("Server Is running on port 2000.");
});

