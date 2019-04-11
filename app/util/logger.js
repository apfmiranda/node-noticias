// const color = ({
//     Reset      : "\x1b[0m",
//     Bright     : "\x1b[1m",
//     Dim        : "\x1b[2m",
//     Underscore : "\x1b[4m",
//     Reverse    : "\x1b[7m",
//     Blink      : "\x1b[5m",
//     Hidden     : "\x1b[8m",
    
//     FgBlack   : "\x1b[30m",
//     FgRed     : "\x1b[31m",
//     FgGreen   : "\x1b[32m",
//     FgYellow  : "\x1b[33m",
//     FgBlue    : "\x1b[34m",
//     FgMagenta : "\x1b[35m",
//     FgCyan    : "\x1b[36m",
//     FgWhite   : "\x1b[37m",
    
//     BgRed     : "\x1b[41m",
//     BgGreen   : "\x1b[42m",
//     BgYellow  : "\x1b[43m",
//     BgBlack   : "\x1b[40m",
//     BgBlue    : "\x1b[44m",
//     BgMagenta : "\x1b[45m",
//     BgCyan    : "\x1b[46m",
//     BgWhite   : "\x1b[47m"
// })

class Logger {
    
    log(message) {
        const timestamp = new Date().toISOString();
        console.log('\x1b[37m', `[APP] ${timestamp} - ${message}`, '\x1b[0m');
    }

    info(message) {
        const timestamp = new Date().toISOString();
        console.log('\x1b[34m', `[APP] ${timestamp} - ${message}`, '\x1b[0m');
    }

    error(message) {
        const timestamp = new Date().toISOString();
        console.log('\x1b[31m', `[APP] ${timestamp} - ${message}`, '\x1b[0m');
    }

}

// class Singleton {

//     constructor() {
//         if (Singleton.instance === undefined) {
//             Singleton.instance = new Logger();
//         }
//     }
  
//     getInstance() {
//         return Singleton.instance;
//     }
  
//   }

// var loggerSingleton = new Singleton();


//module.exports = loggerSingleton.getInstance();

var loggerSingleton;
module.exports = {
    getInstance: function () {
      if (loggerSingleton) return loggerSingleton;
      
      loggerSingleton = new Logger();
      return loggerSingleton;
    }
}