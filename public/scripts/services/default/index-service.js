define('services/default/index-service', [
  'angular-app'
], function (angularApp) {
  angularApp.factory('IndexService', function () {
    var IndexService = {};

    IndexService.getSlogan = function () {
      return "Hello World!";
    };

    return IndexService;
  });
});