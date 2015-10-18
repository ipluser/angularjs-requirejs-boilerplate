var routes = {
  domain: '/',
  routers: [{
    path: '/',
    view: 'default/index',
    data: {
      styles: [
        'default/index'
      ],
      scripts: [
        'controllers/default/index-controller'
      ]
    }
  }]
};

module.exports = routes;

