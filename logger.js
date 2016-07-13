var fs = require ('fs');


// 	Just instantiate with "new Logger()" and can log things via instance.logThis(string)
// 
//	Pass the folllowing object to instantiate logger with some options.
//  configObject : {
// 		offset: '',
// 		methodName: '',
// 		logLine: '',
// 		date: ''
// 	}
//	
//	Pass the same object to logThis(configObject) to log once with given parameters

function Logger (options)  {
	if (!options) {options = {}};
	this.logFileName = 'log.txt';
	this.methodName = options.methodName || 'unknownMethod';
	this.offset = options.offset || 0;
	this.date = options.date || false;

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

		fs.appendFileSync(this.logFileName, result + '\n', 'utf-8');
		process.stdout.write(result + '\n');
		return result;
	};
};

module.exports = Logger;
