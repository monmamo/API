var http = require('http'),
	Express = require('express');

var ddbClient = require('documentdb').DocumentClient;

// Middleware.

var app = Express();

// Routes. All routes are assumed to be database accessors.

app.use('/data',function(request,response,next) { 
	console.log("[/data]",request.path);
	//TODO Handle a data retrieval command. 
	//TODO Implement security to prevent access.
	response.send('[/data] ' + request.path);
})

app.use('/action',function(request,response,next) { 
	console.log("[/action]",request.path);
	//TODO Handle an action. 
	response.send('[/action] ' + request.path);
})

// Anything else: Assume that it is a UI request.
app.use(function(request,response,next) { 
	console.log("[default]",request.path);
	response.send('[default] ' + request.path);
})

// Server.

//TODO Map this to something that is stored in the server rather than in code.
var env = { };

app.listen((env.PORT || 8080), (env.HOST || 'localhost'));
