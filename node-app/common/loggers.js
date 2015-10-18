var locals = require('../config/locals'),
    bunyan = require('bunyan'),
    fse = require('fs-extra'),
    _ = require('lodash');

var loggers = {};

var loggersConfig = [{
  name: 'errLogger',
  streams: [{
    level: 'error',
    path: locals.logPath + 'errLogger.log',
    type: 'rotating-file',
    period: '1d',
    count: 7
  }]
}];

fse.ensureDirSync(locals.logPath);

_.forEach(loggersConfig, function (config) {
  if (locals.isDevMode) {
    if (!config.streams) {
      config.streams = [];
    }

    config.streams.push({
      stream: process.stdout
    });
  }

  loggers[config.name] = bunyan.createLogger(config);
});

module.exports = loggers;