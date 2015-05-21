module.exports = [{
  path: '/',
  view: 'default/login',
  data: {
    title: 'nodejs-basicer 首页',
    requireScripts: [
      'controllers/default/login-controller'
    ],
    styles: [
      'default/login.css'
    ]
  }
}, {
  path: '/welcome',
  view: 'default/welcome',
  data: {
    title: 'nodejs-basicer 欢迎您',
    requireScripts: [
      'controllers/default/welcome-controller'
    ]
  }
}];