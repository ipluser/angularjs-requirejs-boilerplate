var loggers = require('../../node-app/common/loggers');

var routes = {
  notFound: {
    view: 'default/not-found',
    data: {
      title: 'not-found'
    }
  },
  error: {
    view: 'default/error',
    data: {
      title: 'something error'
    }
  }
};

function notFound(req, res) {
  res.status(404).render(routes.notFound.view, routes.notFound.data);
}

function internalError(err, req, res, next) {
  /*jshint unused: false*/
  loggers.errLogger.error('http-status error:', err.stack);
  res.status(500).render(routes.error.view, routes.error.data);
}

module.exports.notFound = notFound;
module.exports.internalError = internalError;
