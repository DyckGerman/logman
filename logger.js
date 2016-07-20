var fs = require ('fs');


// Just instantiate it with `var logMan = new Logman()` to be ready to log things via `logman.logThis(string)`
//
// Pass the folllowing default object as argument to instantiate logger with some options.
//
//     var configObject : {
//         offset: '0',                    // [Integer] number of heading spaces for log line
//         methodName: 'unknownMethod',    // [String] prefix to display
//         logLine: '',                    // [String] string to display
//         date: false,                    // [Boolean] enable prefix with date
//		   logToFile: false,			   // [Boolean] write logs to file
//		   logToStdOut: true 			   // [Boolean] write logs stdout
//     }
//  
//     var logMan = new Logman(configObject);
//	
// Pass the same object to `logThis(configObject)` to log once with given parameters

function Logger (options)  {
	if (!options) {options = {}};
	this.logFileName = 'log.txt';
	this.methodName = options.methodName || 'unknownMethod';
	this.offset = options.offset || 0;
	this.date = options.date || false;
	this.targets = {
		file : options.logToFile || false,
		stdout : options.logToStdOut || true
	};

	this.cleanLog = () => {
		fs.writeFileSync(this.logFileName, '', 'utf-8');
	};

	this.logThis = (options) => {
		if (options.constructor === String) {
			options = {logLine: options};
		}

		var result = '';

		var date = new Date();
		if (options.date) {
			result += date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds() + ' ';
		} else if (this.date && options.date != false) {
			result += date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds() + ' ';
		};

		if (options.offset) {
			for (var i = 0; i < options.offset; i++) {
				result += ' ';
			};
		} else {
			for (var i = 0; i < this.offset; i++) {
				result += ' ';
			};
		};

		if (options.methodName) {
			result += options.methodName + ': ';
		} else if (this.methodName) {
			result += this.methodName + ': ';
		};

		if (options.logLine) {
			result += options.logLine;
		};

		if (options.logToFile) {
			fs.appendFileSync(this.logFileName, result + '\n', 'utf-8');
		} else if (this.targets.file && options.logToFile != false) {
			fs.appendFileSync(this.logFileName, result + '\n', 'utf-8');
		}

		if (options.logToStdOut) {
			process.stdout.write(result + '\n');
		} else if (this.targets.stdout && options.logToStdOut != false) {
			process.stdout.write(result + '\n');
		}

		return result;
	};
};

module.exports = Logger;
