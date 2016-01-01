define([
  'angularMocks',
  'desktop/filters/common/mock-upper-case'
], function () {
  describe('Unit: MockUpperCase filter', function () {
    var MockUpperCase;
    beforeEach(function () {
      module('angularApp');
      inject(function (_$filter_) {
        MockUpperCase = _$filter_('MockUpperCase');
      });
    });

    it('should has a MockUpperCase filter', function () {
      expect(MockUpperCase).not.toBeUndefined();
    });

    it('should has a MockUpperCase filter that change string to upper case', function () {
      var result = MockUpperCase('plus');
      expect(result).toEqual('PLUS');
    });

    it('should return null when input is null or nothing is set', function () {
      var result = MockUpperCase(null);
      expect(result).toBeNull();

      result = MockUpperCase();
      expect(result).toBeNull();
    });
  });
});