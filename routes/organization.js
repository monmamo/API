module.exports = function(app,dbClient) {

	// Actions (verbs).

	app.use('/organization/create',function(request,response,next) { 
		console.log("[/organization/create]",request.path);
		//TODO
		response.send('[/organization/create] ' + request.path);
	})

	app.use('/organization/dispose',function(request,response,next) { 
		console.log("[/organization/dispose]",request.path);
		//TODO 
		response.send('[/organization/dispose] ' + request.path);
	})

	// Data (nouns).

	app.use('/organization/:id',function(request,response,next) { 
		console.log("[/organization/"+request.params.id+"]",request.path);
		//TODO
		response.send("[/organization/"+request.params.id+"] " + request.path);
	})

}


