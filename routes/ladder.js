module.exports = function(app,dbClient) {

	// Actions (verbs).

	app.use('/ladder/create',function(request,response,next) { 
		console.log("[/ladder/create]",request.path);
		//TODO
		response.send('[/ladder/create] ' + request.path);
	})

	app.use('/ladder/dispose',function(request,response,next) { 
		console.log("[/ladder/dispose]",request.path);
		//TODO 
		response.send('[/ladder/dispose] ' + request.path);
	})

	// Data (nouns).

	app.use('/ladder/:id',function(request,response,next) { 
		console.log("[/ladder/"+request.params.id+"]",request.path);
		//TODO
		response.send("[/ladder/"+request.params.id+"] " + request.path);
	})

}


