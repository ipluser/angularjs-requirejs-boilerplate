module.exports = [{
  path: '/',
  view: 'default/login',
  data: {
    title: 'node-basicer 首页',
    requireScripts: [
      'controllers/default/login-controller'
    ],
    styles: [
      'default/login.css'
    ]
  }
}];