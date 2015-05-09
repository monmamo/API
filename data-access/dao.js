// dao.js
// Data Access Object (DAO)

var ddbClient = require('documentdb').DocumentClient;
var ddbUtils = require('./documentDbUtils');

function DAO(ddbClient,databaseId,collectionId) {
	
	this.client = ddbClient;
	this.databaseId = databaseId;
	this.collectionId = collectionId;

	this.database = null;
	this.collection = null;
}

DAO.prototype.init = function (callback) {
	
	var self = this;

	docdbUtils.getOrCreateDatabase(self.client, self.databaseId, function (err, db) {
		if (err) {
			callback(err);

		} else {
			self.database = db;
			docdbUtils.getOrCreateCollection(self.client, self.database._self, self.collectionId, function (err, coll) {
				if (err) {
					callback(err);

				} else {
					self.collection = coll;
				}
			});
		}
	});
};

DAO.prototype.find = function (querySpec, callback) {
	
	var self = this;

	self.client.queryDocuments(self.collection._self, querySpec).toArray(function (err, results) {
		if (err) {
			callback(err);

		} else {
			callback(null, results);
		}
	});
};

DAO.prototype.addItem = function (item, callback) {
	
	var self = this;

	item.date = Date.now();
	item.completed = false;

	self.client.createDocument(self.collection._self, item, function (err, doc) {
		if (err) {
			callback(err);

		} else {
			callback(null, doc);
		}
	});
};

DAO.prototype.updateItem = function (item, callback) {

	var self = this;

	self.getItem(itemId, function (err, doc) {
		if (err) {
			callback(err);

		} else {
			doc.completed = true;

			self.client.replaceDocument(doc._self, doc, function (err, replaced) {
				if (err) {
					callback(err);

				} else {
					callback(null, replaced);
				}
			});
		}
	});
};

DAO.prototype.getItem = function (item, callback) {

	var self = this;

	var querySpec = {
		query: 'SELECT * FROM root r WHERE r.id=@id',
		parameters: [{
			name: '@id',
			value: itemId
		}]
	};

	self.client.queryDocuments(self.collection._self, querySpec).toArray(function (err, results) {
		if (err) {
			callback(err);

		} else {
			callback(null, results[0]);
		}
	});
};

module.exports = DAO;