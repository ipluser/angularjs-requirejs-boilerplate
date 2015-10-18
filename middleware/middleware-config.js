var express = require('express'),
    morgan = require('morgan'),
    favicon = require('serve-favicon'),
    compress = require('compression'),
    cookieParser = require('cookie-parser');

var locals = require('../node-app/config/locals'),
    detector = require('../node-app/utils/detector'),
    routerConfig = require('./router/router-config'),
    errorConfig = require('./error-handling/error-config');

var middlewareConfig = function (app) {
  if (locals.isDevMode) {
    app.use(morgan('combined'));
  }

  app.use(detectMobile);

  if (locals.poweredBy) {
    app.use('/', function (req, res, next) {
      res.setHeader('X-Powered-By', locals.poweredBy);
      next();
    });
  }

  app.use(favicon(process.cwd() + '/public/images/favicon.ico'));
  app.use(cookieParser());
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
  if (detector.isMobile(req.get('User-Agent'))) {
    res.redirect("/h5");
  }
  next();
}

function staticMiddleware(app, options) {
  app.use('/static', express.static(process.cwd() + '/public', options));
  app.use('/templates', function (req, res, next) {
    res.render(req.originalUrl.substr(1), function (err, html) {
      if (err) {
        next();
      } else {
        res.send(html);
      }
    });
  });

  if (!locals.isDevMode) {
    app.use('/static/styles', express.static(process.cwd() + '/public/compiled/styles', options));
    app.use('/static/scripts', express.static(process.cwd() + '/public/compiled/scripts', options));
  }
}

module.exports = middlewareConfig;





