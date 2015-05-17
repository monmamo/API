var Monster = function() {
	this.id = ""; // mock: {{objectId()}}
	this.name = "";
	this.level = 0;
	this.experience = 0;
	this.body = ""; // mock: "{{random('tetrapod','humanshape')}}",
	this.modes = [];
	this.attributes = {
		"length": 0,
		"width": 0,
		"height": 0,
		"heft": 0,
		"mobility": 0
	};
	this.skills = {},
	this.bond = [],
	this.respect = [],
	this.loyalty = []
}

Monster.prototype.addBody = function(body) {
	this.body = body.slug;
}

Monster.prototype.removeBody = function() {
	this.body = null;	
}


Monster.prototype.addFeature = function(feature,cost) {
	this.attributes[feature] = cost;
}

Monster.prototype.removeFeature = function(feature) {
	delete this.attributes[feature];
}

Monster.prototype.addTrait = function(trait,cost) {
	this.attributes[trait] = cost;
}

Monster.prototype.removeTrait = function(trait) {
	delete this.attributes[feature];
}


// Pass the exported model to the caller.
module.exports = Monster;