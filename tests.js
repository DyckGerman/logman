// This file contains test scenarios which can be run
// with Nodeunit unit tests framework

var Logman = require('./logger.js');

// tests if log string contains target line with full call notation
exports.contentTest1 = function (test) {
	var logMan = new Logman();
	var stringToLog = "Hola, I am test string";
	var result = logMan.logThis({logLine: stringToLog});

	test.ok(result.includes(stringToLog));
	test.done();
}

// tests if log string contains target line with short call notation
exports.contentTest2 = function (test) {
	var logMan = new Logman();
	var stringToLog = "Hola, I am test string";
	var result = logMan.logThis(stringToLog);

	test.ok(result.includes(stringToLog));
	test.done();
}