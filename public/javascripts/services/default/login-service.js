define([
  'angular-app'
], function(
  angularApp
) {

  angularApp.factory('loginService', function() {
    var loginService = {};

    loginService.login = function (data) {
      window.location.href = '/welcome';
    };

    return loginService;
  });
});