module.exports = [{
  path: '/',
  view: 'default/login',
  data: {
    title: 'login',
    requireScripts: [
      'controllers/default/login-controller'
    ],
    styles: [
      '/default/login'
    ]
  }
}, {
  path: '/welcome',
  view: 'default/welcome',
  data: {
    title: 'welcome',
    requireScripts: [
      'controllers/default/welcome-controller'
    ]
  }
}];