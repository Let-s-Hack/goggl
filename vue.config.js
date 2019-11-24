module.exports = {
  devServer: {
    host: 'localhost',
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
