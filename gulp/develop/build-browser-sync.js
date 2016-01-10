var browserSync = require("browser-sync");

var envUtil = require('../common/env-util');

if (envUtil.isDevelopment()) {
  var browserSyncServer = browserSync.create(),
      locals = require('../../node-app/config/locals');

  browserSyncServer.init({
    proxy: 'localhost:' + locals.port,
    port: locals.devPort
  });

  module.exports = browserSyncServer;
} else {
  module.exports = browserSync;
}