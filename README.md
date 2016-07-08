# Logman is a man who writes logs for you
### Usage

Just instantiate it with `var logMan = new Logger()` to be ready to log things via `logman.logThis(string)`

Pass the folllowing object to instantiate logger with some options.

    var configObject : {
        offset: '',     // number of heading spaces for log line
        methodName: '', // prefix to display
        logLine: ''     // string to display
    }
    
    var logMan = new Logger(configObject);
	
Pass the same object to `logThis(configObject)` to log once with given parameters
