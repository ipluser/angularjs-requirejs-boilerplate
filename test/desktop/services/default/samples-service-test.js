define([
  'angularMocks',
  'desktop/services/default/samples-service'
], function () {
  describe('Unit: SamplesService', function () {
    var SamplesService;
    beforeEach(function () {
      module('angularApp');
      inject(function (_SamplesService_) {
        SamplesService = _SamplesService_;
      });
    });

    it('should contain an SamplesService service', function () {
      expect(SamplesService).toBeDefined();
    });

    it('should get description that equal to "Hello World!"', function () {
      expect(SamplesService.getDesc().length).toEqual(3);
    });
  });
});