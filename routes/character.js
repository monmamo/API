module.exports = function(app) {

	app.use('/character/create',function(request,response,next) { 
		console.log("[/character/create]",request.path);
		//TODO
		response.send('[/character/create] ' + request.path);
	})

	app.use('/character/dispose',function(request,response,next) { 
		console.log("[/character/dispose]",request.path);
		//TODO 
		response.send('[/character/dispose] ' + request.path);
	})

	// Data (nouns). 

	app.use('/character/:id',function(request,response,next) { 
		console.log("[/character/"+request.params.id+"]",request.path);
		//TODO
		response.send("[/character/"+request.params.id+"] " + request.path);
	})

}


