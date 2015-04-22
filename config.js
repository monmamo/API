var config = {};

config.ddb = {
config.host = process.env.DDB_HOST;
config.authKey = process.env.DDB_KEY;
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;