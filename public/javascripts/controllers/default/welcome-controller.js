define([
  'angularApp', 'services/default/welcome-service'
], function(
  angularApp
){

  angularApp.controller('welcomeCtrl', ['$scope', 'welcomeService', function($scope, welcomeService) {
    $scope.test = welcomeService.test;
  }]);

});