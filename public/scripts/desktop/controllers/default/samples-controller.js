define('desktop/controllers/default/samples-controller', [
  'desktop/angular-app',
  'desktop/filters/common/mock-upper-case',
  'desktop/directives/components/mock-tabs',
  'desktop/services/default/samples-service'
], function (angularApp) {
  angularApp.controller('SamplesCtrl', [
    '$scope', 'SamplesService', function ($scope, SamplesService) {
      $scope.panes = SamplesService.getDesc();
    }
  ]);
});