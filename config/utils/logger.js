var systemParams = require('../system-params.json'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    bunyan = require('bunyan'),
    logger;

fs.exists(systemParams.logPath, function(exist) {
  if (exist) {
    logger = newLogger();
  } else {
    mkdirp(systemParams.logPath, function(err) {
      if (err) {
        console.error(err);
      } else {
        logger = newLogger();
      }
    });
  }
});

function newLogger() {
  return bunyan.createLogger({
    name: 'nodejs-basicer',
    streams: [{
      stream: process.stdout
    }, {
      level: 'error',
      path: systemParams.logPath + 'nodejs-basicer-error.log',
      type: 'rotating-file',
      period: '1d',
      count: 7
    }]
  });
}

module.exports = logger;
