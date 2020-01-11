const path = require('path');

module.exports = {
  devServer: {
    host: 'localhost',
  },
  transpileDependencies: [
    'vuex-module-decorators'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.join(__dirname, '/src/components'),
        '~public': path.join(__dirname, '/public'),
      },
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    // SVGをインラインで読み込む設定
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          // Options: https://github.com/svg/svgo/blob/master/.svgo.yml
          plugins: [{ removeViewBox: false }, { prefixIds: true }, { removeXMLNS: true }]
        },
      });
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      swDest: 'service-worker.js',
    },
    appleMobileWebAppCapable: 'yes',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/prepend.scss";',
      },
    },
  },
};
