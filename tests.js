// This file contains test scenarios which can be run
// with Nodeunit unit tests framework

var Logman = require('./logger.js');

var hasDate = function (string) {
	var dateRegExp = /^\d{1,2}:\d{1,2}:\d{1,2}.\d{1,2}/
	return !!string.match(dateRegExp);
}

// tests if log string contains target line with full call notation
exports.contentTest1 = function (test) {
	var logMan = new Logman();
	var stringToLog = "Hola, I am test string";
	var result = logMan.logThis({logLine: stringToLog});

	console.log();
	test.ok(result.includes(stringToLog));
	test.done();
}

// tests if log string contains target line with short call notation
exports.contentTest2 = function (test) {
	var logMan = new Logman();
	var stringToLog = "Hola, I am test string";
	var result = logMan.logThis(stringToLog);

	console.log();
	test.ok(result.includes(stringToLog));
	test.done();
}

// tests if log string contains date {default: true, custom: ...}
exports.dateTest1 = function (test) {
	var logMan = new Logman({date: true});
	var stringToLog = "Hola, I am test string with timing";
	var result = logMan.logThis(stringToLog);
	
	console.log();
	test.ok(hasDate(result));
	test.done();
}

// tests if log string contains date {default: false, custom: true}
exports.dateTest2 = function (test) {
	var logMan = new Logman({date: false});
	var stringToLog = "Hola, I am test string with timing";
	var result = logMan.logThis({logLine: stringToLog, date: true});

	console.log();
	test.ok(hasDate(result));
	test.done();
}

// tests if log string contains date {default: false, custom: ...}
exports.dateTest3 = function (test) {
	var logMan = new Logman();
	var stringToLog = "Hola, I am test string with no timing";
	var result = logMan.logThis(stringToLog);

	console.log();
	test.ok(!hasDate(result));
	test.done();
}

// tests if log string contains date {default: true, custom: false}
exports.dateTest4 = function (test) {
	var logMan = new Logman({date: true});
	var stringToLog = "Hola, I am test string with no timing";
	var result = logMan.logThis({logLine:stringToLog, date: false});

	console.log();
	test.ok(!hasDate(result));
	test.done();
}