module.exports = function(app) {
	
	// Actions (verbs).

	app.use('/monster/create',function(request,response,next) { 
		console.log("[/monster/create]",request.path);
		//TODO
		response.send('[/monster/create] ' + request.path);
	})

	app.use('/monster/dispose',function(request,response,next) { 
		console.log("[/monster/dispose]",request.path);
		//TODO 
		response.send('[/monster/dispose] ' + request.path);
	})

	// Update basic information about a Monster.
	app.use('/monster/update',function(request,response,next) { 
		console.log("[/monster/update]",request.path);
		//TODO
		response.send('[/monster/update] ' + request.path);
	})
	
	app.use('/monster/train',function(request,response,next) { 
		console.log("[/monster/train]",request.path);
		//TODO
		response.send('[/monster/train] ' + request.path);
	})
	
	// Data (nouns). 

	app.use('/monster/:id',function(request,response,next) { 
		console.log("[/monster/"+request.params.id+"]",request.path);
		//TODO
		response.send("[/monster/"+request.params.id+"] " + request.path);
	})

}


