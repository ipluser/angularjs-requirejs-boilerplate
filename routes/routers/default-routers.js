module.exports = [{
  path: '/',
  view: 'default/login',
  data: {
    title: 'node-basicer首页',
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
    title: 'node-basicer欢迎您',
    requireScripts: [
      'controllers/default/welcome-controller'
    ]
  }
}];