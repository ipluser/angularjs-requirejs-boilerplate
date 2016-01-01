define('desktop/directives/components/mock-tabs', [
  'desktop/angular-app'
], function (angularApp) {
  angularApp.directive('mockTabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: true,
      controller: ['$scope', function($scope) {
        var panes = $scope.panes = [];

        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }

        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      }],
      templateUrl: '/desktop/templates/components/mock-tabs.html'
    };
  }).directive('mockPane', function() {
    return {
      require: '^mockTabs',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        title: '@'
      },
      link: function(scope, element, attrs, tabsController) {
        tabsController.addPane(scope);
      },
      templateUrl: '/desktop/templates/components/mock-pane.html'
    };
  });
});