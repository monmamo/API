var http = require('http'),
	Express = require('express');

var ddbClient = require('documentdb').DocumentClient;

// Middleware.

var app = Express();

// Routes.
// Root goes to the Durandal application.
// All other routes are assumed to be database accessors.

app.use('/data',function(request,response,next) { 
	console.log("[/data]",request.path);
	//TODO Handle a data retrieval command. 
	//TODO Implement security to prevent access.
})

app.use('/action',function(request,response,next) { 
	console.log("[/action]",request.path);
	//TODO Handle an action. 
})

// Anything else: Assume that it is a UI request.
app.use(function(request,response,next) { 
	console.log("[default]",request.path);
	response.sendFile(__dirname + '/public/UI' + request.path); 
})

// Server.

//TODO Map this to something that is stored in the server rather than in code.
var env = { };

app.listen((env.PORT || 8080), (env.HOST || 'localhost'));
