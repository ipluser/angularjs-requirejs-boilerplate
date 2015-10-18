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

  require('https').createServer(options, app).listen(port, function () {
    console.log('server listening on port(SSL enabled) ' + port);
  });
} else {
  require('http').createServer(app).listen(port, function () {
    console.log('server listening on port ' + port);
  });
}
