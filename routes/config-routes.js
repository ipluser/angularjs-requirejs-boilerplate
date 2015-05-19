var express = require('express'),
    routes = require('./routes'),
    bunyan = require('bunyan');

var logger = bunyan.createLogger({
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

var configRoutes = function(app) {
  for (var i in routes) {
    app.use(routes[i].domain, newRouter(routes[i].routers));
  }

  app.use(function(req, res) {
    res.status(404).render('default/not-found', {title: 'resource not found'});
  });

  app.use(function(err, req, res) {
    logger.error(err.stack);
    res.status(500).render('default/error', {title: 'error'});
  });
};

module.exports = configRoutes;
