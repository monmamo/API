module.exports = function(app,dbClient) {

	app.use('/action/organization/create',function(request,response,next) { 
		console.log("[/action/organization/create]",request.path);
		//TODO
		response.send('[/action/organization/create] ' + request.path);
	})

	app.use('/action/organization/dispose',function(request,response,next) { 
		console.log("[/action/organization/dispose]",request.path);
		//TODO 
		response.send('[/action/organization/dispose] ' + request.path);
	})

}


