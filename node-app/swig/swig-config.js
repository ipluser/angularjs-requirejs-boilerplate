var locals = require('../config/locals'),
    filters = require('./filters');

var swigConfig = function (swig) {
  swig.setDefaults({
    varControls: ['{=', '=}'],
    cache: locals.isDevMode ? false : 'memory',
    locals: locals
  });

  filters(swig);
};

module.exports = swigConfig;