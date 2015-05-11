module.exports = function(app) {

	app.use('/action/monster/create',function(request,response,next) { 
		console.log("[/action/monster/create]",request.path);
		//TODO
		response.send('[/action/monster/create] ' + request.path);
	})

	app.use('/action/monster/dispose',function(request,response,next) { 
		console.log("[/action/monster/dispose]",request.path);
		//TODO 
		response.send('[/action/monster/dispose] ' + request.path);
	})

}


