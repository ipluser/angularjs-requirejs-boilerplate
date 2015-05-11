var express = require('express'),
    routes = require('./routes');

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
};

module.exports = configRoutes;
