define('controller/login-controller', [
    'app', 'service/login-service'
  ], function (app, loginService) {

  app.controller('loginCtrl', function($scope) {
    $scope.data = {};

    $(document).ready(function() {
      $('#backgroundImage').fullscreenBackground();
    });

    $('#loginBtn').click(function() {
      loginService.login({
        username: $('#username').val(),
        password: $('#password').val()
      });
    });
  });
});