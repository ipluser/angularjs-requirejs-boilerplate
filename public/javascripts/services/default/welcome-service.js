define([
  'angularApp'
], function(
  angularApp
){

  angularApp.factory('welcomeService', function() {
    var welcomeService = {};

    welcomeService.test = function() {
      alert('hello service');
    }

    return welcomeService;
  });

})