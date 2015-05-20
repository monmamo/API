module.exports = function(app,dbClient) {

	// Actions (verbs).

	app.use('/league/create',function(request,response,next) { 
		console.log("[/league/create]",request.path);
		//TODO
		response.send('[/league/create] ' + request.path);
	})

	app.use('/league/dispose',function(request,response,next) { 
		console.log("[/league/dispose]",request.path);
		//TODO 
		response.send('[/league/dispose] ' + request.path);
	})

	// Data (nouns).

	app.use('/league/:id',function(request,response,next) { 
		console.log("[/league/"+request.params.id+"]",request.path);
		//TODO
		response.send("[/league/"+request.params.id+"] " + request.path);
	})

}


