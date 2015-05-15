var express = require('express'),
    swig = require('swig'),
    favicon = require('serve-favicon'),
    configRoutes = require('./routes/config-routes'),
    systemParams = require('./config/system-params.json'),
    bunyan = require('bunyan');

var app = express(),
    logger = bunyan.createLogger({
      name: 'mana',
      streams: [{
        stream: process.stdout
      }, {
        level: 'error',
        path: '/dev/log/mana-error.log',
        type: 'rotating-file',
        period: '1d',
        count: 7
      }]
    });

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', !systemParams.isDevMode);
swig.setDefaults({cache: !systemParams.isDevMode});

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/compiled/javascripts'));
app.use(express.static(__dirname + '/public/javascripts'));
app.use(express.static(__dirname + '/public/compiled/styles'));
app.use(express.static(__dirname + '/public/styles'));

configRoutes(app);

app.listen(systemParams.port);
logger.info('start service on ' + systemParams.port);