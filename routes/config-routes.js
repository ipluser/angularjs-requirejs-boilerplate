var express = require('express'),
    routes = require('./routes'),
    logger = require('../config/utils/logger');

function newRouter(routers) {
  var router = express.Router();

  for(var i in routers) {
    (function(index) {
      router.get(routers[index].path, function(req, res) {
        res.render(routers[index].view, routers[index].data, routers[index].callback);
      });
    })(i);
  }

  return router;
}

function handleHttpStatus(app) {
  app.use(function(req, res) {
    res.status(404).render('default/status', {
      title: 'not found',
      styles: [
        '/default/status'
      ]
    });
  });

  app.use(function(err, req, res) {
    res.render('default/status', {
      title: 'something wrong',
      styles: [
        '/default/status'
      ]
    }, function() {
      logger.error(err.stack);
    });
  });
}

var configRoutes = function(app) {
  for (var i in routes) {
    app.use(routes[i].domain, newRouter(routes[i].routers));
  }

  handleHttpStatus(app);
};

module.exports = configRoutes;
