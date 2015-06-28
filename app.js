var express = require('express'),
    swig = require('swig'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    configRoutes = require('./routes/config-routes'),
    systemParams = require('./config/system-params.json');

var app = express();

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', !systemParams.isDevMode);
swig.setDefaults({
  cache: systemParams.isDevMode ? false : 'memory',
  locals: {
    now: function () {
      return new Date();
    },
    systemParams: systemParams
  }
});

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(__dirname + '/public/compiled/javascripts'));
app.use(express.static(__dirname + '/public/javascripts'));
app.use(express.static(__dirname + '/public/compiled/styles'));
app.use(express.static(__dirname + '/public/styles'));
app.use(express.static(__dirname + '/public/images'));

if (systemParams.isDevMode) {
  app.use(morgan('dev'));
}

configRoutes(app);

console.log('start server on port[' + systemParams.port + ']');
app.listen(systemParams.port);