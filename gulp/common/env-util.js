var argv = require('yargs').argv;

var env = {};

env.isProduction = function () {
  return argv.production ? true : false;
};

env.isDevelopment = function () {
  return argv.development ? true : false;
};

module.exports = env;