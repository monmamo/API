module.exports = function(app) {

	// Actions (verbs).

	app.use('/game/start',function(request,response,next) { 
		console.log("[/game/start]",request.path);
		//TODO
		response.send('[/game/start] ' + request.path);
	})

	app.use('/game/stop',function(request,response,next) { 
		console.log("[/game/stop]",request.path);
		//TODO 
		response.send('[/game/stop] ' + request.path);
	})

	// Data (nouns).


}


