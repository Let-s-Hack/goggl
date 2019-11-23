const path = require('path');

module.exports = {
  devServer: {
    host: 'localhost',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.join(__dirname, '/src/components'),
      },
    },
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      swDest: 'service-worker.js'
    }
  }
}
