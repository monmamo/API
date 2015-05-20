module.exports = function(app) {

	app.use('/member/create',function(request,response,next) { 
		console.log("[/member/create]",request.path);
		
		response.send('[/member/create] ' + request.path);
	})

	app.use('/member/dispose',function(request,response,next) { 
		console.log("[/member/dispose]",request.path);
		//TODO 
		response.send('[/member/dispose] ' + request.path);
	})

	app.use('/member/login',function(request,response,next) { 
		console.log("[/member/login]",request.path);
		//TODO 
		response.send('[/member/login] ' + request.path);
	})

	// Update member's profile info.
	app.use('/member/update',function(request,response,next) { 
		console.log("[/member/update]",request.path);
		//TODO 
		response.send('[/member/update] ' + request.path);
	})
	
	// Data (nouns). 

	app.use('/member/:id',function(request,response,next) { 
		console.log("[/member/"+request.params.id+"]",request.path);
		//TODO
		response.send("[/member/"+request.params.id+"] " + request.path);
	})

	

}


