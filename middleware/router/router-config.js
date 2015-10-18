var express = require('express'),
    _ = require('lodash'),
    routerDockers = require('./router-dockers');

var routerConfig = function (app) {
  _.forEach(routerDockers, function (routerDocker) {
    app.use(routerDocker.domain, newRouter(routerDocker.routers));
  });
};

function newRouter(routersConfig) {
  var router = express.Router();

  _.forEach(routersConfig, function (config) {
    router.get(config.path, function (req, res) {
      res.render(config.view, config.data);
    });
  });

  return router;
}

module.exports = routerConfig;