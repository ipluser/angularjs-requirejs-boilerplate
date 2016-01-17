var express = require('express'),
    swig = require('swig'),
    locals = require('./node-app/config/locals'),
    swigConfig = require('./node-app/swig/swig-config'),
    middlewareConfig = require('./middleware/middleware-config');

var app = express(),
    port = locals.port;

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', swig.renderFile);

swigConfig(swig);
middlewareConfig(app);

if (locals.SSL.enableSSL) {
  var fs = require('fs');

  var options = {
    key: fs.readFileSync(locals.SSL.key),
    cert: fs.readFileSync(locals.SSL.cert)
  };

  server = require('https').createServer(options, app).listen(port);
} else {
  server = require('http').createServer(app).listen(port);
}

if (server !== null) {
  server.on('error', onError);
  server.on('listening', onListening);
}

function onError(error) {
  if (error.syscall !== 'listen') {
    loggers.errLogger.error('server internal error', error);
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error('Port ' + port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('Port ' + port + ' is already in use');
      process.exit(1);
      break;
    default:
      loggers.errLogger.error('server internal error', error);
      throw error;
  }
}

function onListening() {
  console.log('Server listening on port'
      + (locals.SSL.enableSSL ? '(SSL enabled) ' : ' ') + port);
}
