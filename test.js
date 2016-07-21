var should = require('should');
var Logman = require('./logger.js')

var hasDate = function (string) {
	var dateRegExp = /^\d{1,2}:\d{1,2}:\d{1,2}.\d{1,2}/
	return !!string.match(dateRegExp);
}

describe('Log string', function() {
	it('should contain log line with full call notation', function(done) {
		var logMan = new Logman({logToStdOut: false, logToFile: false});
		var stringToLog = "Hola, I am test string";
		var result = logMan.logThis({logLine: stringToLog});

		should(result).containEql(stringToLog);
		done();
	});
	it('should contain log line with short call notation', function(done) {
		var logMan = new Logman({logToStdOut: false, logToFile: false});
		var stringToLog = "Hola, I am test string";
		var result = logMan.logThis(stringToLog);

		should(result).containEql(stringToLog);
		done();
	});


	describe('should contain date', function () {
		it('with logger setting "true" and not specified command setting', function(done) {
			var logMan = new Logman({date: true, logToStdOut: false, logToFile: false});
			var stringToLog = "Hola, I am test string with timing";
			var result = logMan.logThis(stringToLog);

			should(hasDate(result)).be.ok;
			done();
		});
		it('with logger setting "false" and command setting "true"', function(done) {
			var logMan = new Logman({date: false, logToStdOut: false, logToFile: false});
			var stringToLog = "Hola, I am test string with timing";
			var result = logMan.logThis({logLine: stringToLog, date: true});

			should(hasDate(result)).be.ok;
			done();
		});
	});

	describe('should not contain date', function () {
		it('with logger setting "false" and not specified command setting', function(done) {
			var logMan = new Logman({date: false, logToStdOut: false, logToFile: false});
			var stringToLog = "Hola, I am test string with timing";
			var result = logMan.logThis({logLine: stringToLog, date: true});

			should(hasDate(result)).not.be.ok;
			done();
		});
		it('with logger setting "true" and command setting "false"', function(done) {
			var logMan = new Logman({date: true, logToStdOut: false, logToFile: false});
			var stringToLog = "Hola, I am test string with no timing";
			var result = logMan.logThis({logLine:stringToLog, date: false});
			
			should(hasDate(result)).not.be.ok;
			done();
		});
	});
});