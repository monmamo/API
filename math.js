// math.js
// Game math function.

// Uniform random function (U).
exports.uniform = function(rolls,multiplier) {
	result = 0;
	for (i = 1; i < rolls; i++) result += Math.random();
	return result;
}

// Logarithmic random function.
// Returns numbers between 1 and infinity.
exports.logarithmic = function() {
	return -Math.log(1-Math.random());
}