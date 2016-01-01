var routes = {
  domain: '/h5',
  routers: [{
    path: '/',
    view: 'mobile/render/default/index',
    data: {
      styles: [
        'mobile/default/index'
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

