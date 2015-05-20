var http = require('http'),
	Express = require('express');

var DocumentClient = require('documentdb').DocumentClient;
var host = "https://mmm.documents.azure.com:443"; 
var masterKey = process.env.DB_KEY;

console.log("Creating database client.")
var dbClient = new DocumentClient(host, {masterKey: masterKey}); 

// Middleware.

var app = Express();

// Routes. 
var routes = ['character','league','member','monster','organization'];
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
