var express = require('express'),
    morgan = require('morgan'),
    favicon = require('serve-favicon'),
    compress = require('compression'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var locals = require('../node-app/config/locals'),
    detector = require('../node-app/utils/detector'),
    routerConfig = require('./router/router-config'),
    errorConfig = require('./error-handling/error-config');

var middlewareConfig = function (app) {
  if (locals.isDevMode) {
    app.use(morgan('dev'));
  }

  if (locals.poweredBy) {
    app.use('/', function (req, res, next) {
      res.set('X-Powered-By', locals.poweredBy);
      next();
    });
  }

  app.use(detectMobile);
  app.use(favicon(process.cwd() + '/public/images/favicon.ico'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  if (!locals.isDevMode) {
    app.use(compress());
  }

  staticMiddleware(app, {
    maxAge: locals.isDevMode ? 0 : locals.cachePeriod
  });
  routerConfig(app);
  errorConfig(app);
};

function detectMobile(req, res, next) {
  if (detector.isMobile(req.get('User-Agent')) && req.url === '/') {
    res.redirect("/h5");
    return;
  }
  next();
}

function staticMiddleware(app, options) {
  if (!locals.isDevMode) {
    app.use('/static/styles/desktop', express.static(process.cwd() + '/public/compiled/desktop/styles', options));
    app.use('/static/styles/mobile', express.static(process.cwd() + '/public/compiled/mobile/styles', options));
    app.use('/static/scripts/desktop', express.static(process.cwd() + '/public/compiled/desktop/scripts', options));
    app.use('/static/scripts/mobile', express.static(process.cwd() + '/public/compiled/mobile/scripts', options));
    app.use('/static/libs', express.static(process.cwd() + '/public/libs', options));
  } else {
    app.use('/static', express.static(process.cwd() + '/public', options));
  }

  app.use('/static/images', express.static(process.cwd() + '/public/images', options));
  app.use('/*/templates', function (req, res, next) {
    res.render(req.originalUrl.substr(1), function (err, html) {
      if (err) {
        next();
      } else {
        res.send(html);
      }
    });
  });
}

module.exports = middlewareConfig;