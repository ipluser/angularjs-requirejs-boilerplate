define('service/welcome-service', [], function() {
  var welcomeService = {};

  welcomeService.test = function() {
    alert('hello service');
  }

  return welcomeService;
})