# Logman is a man who writes logs for you
### Install with

    npm install git+https://github.com/DyckGerman/logman.git

### Include with

    const Logman = require('logman');

### Usage

Just instantiate it with `var logMan = new Logman()` to be ready to log things via `logman.logThis(string)`

Pass the folllowing default object as argument to instantiate logger with some options.

    var configObject : {
        offset: '0',                    // [Integer] number of heading spaces for log line
        methodName: 'unknownMethod',    // [String] prefix to display
        logLine: '',                    // [String] string to display
        date: 'false'                   // [Boolean] date prefix enabler
    }
    
    var logMan = new Logman(configObject);
	
Pass the same object to `logThis(configObject)` to log once with given parameters

### Testing

Install Nodeunit testing framework with npm

    npm install nodeunit -g
    
Run tests

    nodeunit tests.js
