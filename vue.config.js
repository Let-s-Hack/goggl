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
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    // 通常はインラインSVGでインポートする。?externalをつけると外部SVGをインポートできる
    svgRule
      .oneOf('external')
      .resourceQuery(/external/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      })
      .end()
      .end()
      .oneOf('inline')
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
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/prepend.scss";',
      },
    },
  },
};
