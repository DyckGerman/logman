# Logman is a man who writes logs for you
### Install with

    npm install git+https://github.com/DyckGerman/logman.git

### Include with

    const Logman = require('logman');

### Usage

Just instantiate it with `var logMan = new Logman()` to be ready to log things via `logman.logThis(string)`

Pass the folllowing object to instantiate logger with some options.

    var configObject : {
        offset: '',     // number of heading spaces for log line
        methodName: '', // prefix to display
        logLine: ''     // string to display
    }
    
    var logMan = new Logman(configObject);
	
Pass the same object to `logThis(configObject)` to log once with given parameters

### Testing

Install Nodeunit testing framework with npm

    npm install nodeunit -g
    
Run tests

    nodeunit tests.js
