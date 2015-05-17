//TODO Implement security to prevent unauthorized access.

// dbClient: require('documentdb').DocumentClient; new DocumentClient(host,options); 
// callback: function(document)
function getDocument(dbClient,databaseId,collectionId,documentId,callback) {
	var DoQmentDB  = require('doqmentdb');
	var db = new DoQmentDB(dbClient,databaseId);
	var collection = db.use(collectionId);
	collection.findById(documentId).then(callback);
}

module.exports = function(app,dbClient) {

	// colid: document collection ID
	// docid: ID of document within the specified collection
	app.use('/data/:colid/:docid',function(request,response,next) { 

		console.log("[/data/"+request.params.colid+"/"+request.params.docid+"] ",request.path);	
		getDocument(dbClient,'M',request.params.colid,request.params.docid,function(doc) { response.send(doc); });

	}); // app.use
}; // exports

