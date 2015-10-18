define([
  'angularMocks',
  'controllers/default/index-controller'
], function () {
  describe('Unit: Index Controller', function () {
    var IndexCtrl, $scope;
    beforeEach(function () {
      module('angularApp');
      inject(function (_$controller_, _$rootScope_) {
        $scope = _$rootScope_.$new();
        IndexCtrl = _$controller_('IndexCtrl', {
          $scope: $scope
        });
      });
    });

    it('should be registered', function () {
      expect(IndexCtrl).toBeDefined();
    });

    it('should has an slogan property that equal to "Hello World!"', function () {
      expect($scope.slogan).toBeDefined();
      expect($scope.slogan).toEqual('Hello World!');
    });
  });
});