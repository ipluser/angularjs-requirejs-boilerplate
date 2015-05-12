define([
  'angularApp'
], function(
  angularApp
) {

  angularApp.factory('loginService', function() {
    var loginService = {};

    loginService.login = function (data) {
      alert('login success: ' + JSON.stringify(data));
      window.location = '/welcome';
    }

    return loginService;
  });
});