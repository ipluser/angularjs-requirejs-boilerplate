var express = require('express'),
    _ = require('lodash'),
    routerDockers = require('./desktop/router-dockers'),
    mobileRouterDockers = require('./mobile/router-dockers');

var routerConfig = function (app) {
  _.forEach(routerDockers, function (routes) {
    app.use(routes.domain, newRouter(routes.routers));
  });

  _.forEach(mobileRouterDockers, function (routes) {
    app.use(routes.domain, newRouter(routes.routers));
  });
};

function newRouter(routersConfig) {
  // custom Router
  if (_.isFunction(routersConfig)) {
    return routersConfig;
  }

  var router = express.Router();
  if (!_.isArray(routersConfig)) {
    return router;
  }

  _.forEach(routersConfig, function (config) {
    router.get(config.path, function (req, res) {
      if (config.preRender) {
        config.preRender(req, res, config.data);
      }
      res.render(config.view, config.data);
    });
  });

  return router;
}

module.exports = routerConfig;