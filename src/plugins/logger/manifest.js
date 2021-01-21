/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: file content
 */
module.exports = {
  version: '1.2.0',
  schema: {
    $id: 'N/A',
  },
  init: function (pluginContext) {
    // Load Policy of Logger
    let policy = require('./policies/logger.policy')
    pluginContext.registerPolicy(policy)
    
    pluginContext.eventBus.on('hot-reload', function ({ type, newConfig }) {
      // "type" is gateway or system
      // depends on what file was changed
      // newConfig - is newly loaded configuration of ExpressGateway
      console.log('[PLUGINS.LOGGER] hot-reload', type, newConfig);
    });

    pluginContext.eventBus.on('http-ready', function ({ httpServer }) {
      console.log('[PLUGINS.LOGGER] http server is ready', httpServer.address());

      // Proxy websockets to localhost:9015
      const httpProxy = require('http-proxy')
      var proxy = new httpProxy.createProxyServer({
        target: {
          host: 'localhost',
          port: 9015
        }
      });

      httpServer.on('upgrade', (req, socket, head) => {
        proxy.ws(req, socket, head);
      });
    });

    pluginContext.eventBus.on('https-ready', function ({ httpsServer }) {
      console.log('[PLUGINS.LOGGER] https server is ready', httpsServer.address());
    });

    pluginContext.eventBus.on('admin-ready', function ({ adminServer }) {
      console.log('[PLUGINS.LOGGER] admin server is ready', adminServer.address());
    });
  }
}
