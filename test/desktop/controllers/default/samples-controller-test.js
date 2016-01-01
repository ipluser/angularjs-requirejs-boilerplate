define([
  'angularMocks',
  'desktop/controllers/default/samples-controller'
], function () {
  describe('Unit: Samples Controller', function () {
    var SamplesCtrl, $scope;
    beforeEach(function () {
      module('angularApp');
      inject(function (_$controller_, _$rootScope_) {
        $scope = _$rootScope_.$new();
        SamplesCtrl = _$controller_('SamplesCtrl', {
          $scope: $scope
        });
      });
    });

    it('should be registered', function () {
      expect(SamplesCtrl).toBeDefined();
    });

    it('should has an panes property that length equals to 3', function () {
      expect($scope.panes).toBeDefined();
      expect($scope.panes.length).toEqual(3);
    });
  });
});