var loggers = require('../../node-app/common/loggers');

function notFound(req, res) {
  if (/^[/]h5/.test(req.path)) {
    res.status(404).redirect('/h5/not-found');
    return ;
  }
  res.status(404).redirect('/not-found');
}

function internalError(err, req, res, next) {
  /*jshint unused: false*/
  loggers.errLogger.error('http-status error:\n' + err.stack);

  if (/^[/]h5/.test(req.path)) {
    res.status(404).redirect('/h5/error');
    return ;
  }
  res.status(500).redirect('/error');
}

module.exports.notFound = notFound;
module.exports.internalError = internalError;
