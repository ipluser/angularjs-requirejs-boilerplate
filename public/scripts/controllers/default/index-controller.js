define('controllers/default/index-controller', [
  'angular-app',
  'services/default/index-service',
  'directives/default/author-signature',
  'filters/default/upper-case'
], function (angularApp) {
  angularApp.controller('IndexCtrl', [
    '$scope', 'IndexService', function ($scope, IndexService) {
      $scope.slogan = IndexService.getSlogan();
    }
  ]);
});