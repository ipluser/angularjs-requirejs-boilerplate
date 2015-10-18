define([
  'angularMocks',
  'services/default/index-service'
], function () {
  describe('Unit: IndexService', function () {
    var IndexService;
    beforeEach(function () {
      module('angularApp');
      inject(function (_IndexService_) {
        IndexService = _IndexService_;
      });
    });

    it('should contain an IndexService service', function () {
      expect(IndexService).toBeDefined();
    });

    it('should get description that equal to "Hello World!"', function () {
      expect(IndexService.getSlogan()).toEqual('Hello World!');
    });
  });
});