var locals = require('../../node-app/config/locals'),
    devErrorHandler = require('errorhandler'),
    defaultHandler = require('./default');

function errorConfig(app) {
  app.use(defaultHandler.notFound);

  if (locals.isDevMode) {
    app.use(devErrorHandler());
  } else {
    app.use(defaultHandler.internalError);
  }
}

module.exports = errorConfig;