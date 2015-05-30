var http = require('http'),
	Express = require('express');

var DocumentClient = require('documentdb').DocumentClient;
var host = "https://mmm.documents.azure.com:443"; 
var masterKey = process.env.DB_KEY;

// Middleware.

var app = Express();

console.log("Creating database client.")
app.locals.dbClient = new DocumentClient(host, {masterKey: masterKey}); 

//TODO Define and set the value of the game clock.


// Routes. 
var routes = ['character','game','league','member','monster','organization'];
for (i in routes) {
	console.log("Loading route: " + routes[i]);
	module = require("./routes/" + routes[i]);
	new module(app,dbClient)
}

// Anything else.
app.use(function(request,response,next) { 
	console.log("[default]",request.path);
	response.send("Bad path " + request.path);
})

// Server.

app.listen((process.env.PORT || 8080), (process.env.HOST || 'localhost'));
console.log("Server started.")
