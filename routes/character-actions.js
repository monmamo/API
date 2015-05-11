module.exports = function(app) {

	app.use('/action/character/create',function(request,response,next) { 
		console.log("[/action/character/create]",request.path);
		//TODO
		response.send('[/action/character/create] ' + request.path);
	})

	app.use('/action/character/dispose',function(request,response,next) { 
		console.log("[/action/character/dispose]",request.path);
		//TODO 
		response.send('[/action/character/dispose] ' + request.path);
	})

}


