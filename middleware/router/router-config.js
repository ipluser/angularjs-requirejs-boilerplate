var express = require('express'),
    _ = require('lodash'),
    routerDockers = require('./router-dockers');

var routerConfig = function (app) {
  _.forEach(routerDockers, function (routerDocker) {
    app.use(routerDocker.domain, newRouter(routerDocker.routers));
  });
};

function newRouter(routersConfig) {
  if (_.isFunction(routersConfig)) {
    return routersConfig;
  }

  var router = express.Router();

  if (!_.isArray(routersConfig)) {
    return router;
  }

  _.forEach(routersConfig, function (config) {
    router.get(config.path, function (req, res) {
      res.render(config.view, config.data);
    });
  });

  return router;
}

module.exports = routerConfig;