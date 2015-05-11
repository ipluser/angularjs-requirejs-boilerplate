module.exports = [{
  path: '/',
  view: 'login',
  data: {
    title: 'Mana首页',
    javascripts: [
      '/controller/login-controller.js'
    ],
    stylesheets: [
      '/login.css'
    ]
  }
}, {
  path: '/welcome',
  view: 'welcome',
  data: {
    title: 'Mana欢迎您',
    javascripts: [
      '/controller/welcome-controller.js'
    ],
    stylesheets: [
    ]
  }
}];