var routes = {
  domain: '/',
  routers: [{
    path: '/',
    view: 'desktop/render/default/index',
    data: {
      styles: [
        'desktop/default/index'
      ]
    }
  }, {
    path: '/samples',
    view: 'desktop/render/default/samples',
    data: {
      styles: [
        'desktop/default/samples'
      ],
      scripts: [
        'desktop/controllers/default/samples-controller'
      ]
    }
  }, {
    path: '/error',
    view: 'desktop/render/default/error'
  }, {
    path: '/not-found',
    view: 'desktop/render/default/not-found'
  }]
};

module.exports = routes;

