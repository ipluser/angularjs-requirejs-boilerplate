var url = require('url'),
    _ = require('lodash'),
    locals = require('../config/locals');

var filters = {};

filters.buildNumber = function (input) {
  if (locals.isDevMode) {
    return input;
  }

  var obj = url.parse(input, true);
  var final = input;

  if (!_.isEmpty(obj.search)) {
    final += '&';
  } else {
    final += '?';
  }
  return final + 'ver=' + locals.buildNumber;
};

function initFilters(swig) {
  _.forEach(filters, function (value, key) {
    swig.setFilter(key, value);
  });
}

module.exports = initFilters;