module.exports = function(app) {

	app.use('/action/member/create',function(request,response,next) { 
		console.log("[/action/member/create]",request.path);
		//TODO
		response.send('[/action/member/create] ' + request.path);
	})

	app.use('/action/member/dispose',function(request,response,next) { 
		console.log("[/action/member/dispose]",request.path);
		//TODO 
		response.send('[/action/member/dispose] ' + request.path);
	})

}


