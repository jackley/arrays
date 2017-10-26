const path = require('path');
const webpack = require('webpack');
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
/**
 * Define webpack plugins
 * @param  {string} env
 * @return {object}
 */
function getPlugins(isDev) {
  // define free variables
  const GLOBALS = {
    __DEV__: !!isDev,
  };

  const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
  ];

  if (!isDev) {
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin());
  }

  return plugins;
}


/**
 * Define webpack loaders
 * @param  {string} env
 * @return {object}
 */
function getLoaders() {
  const loaders = [
    {
      test: /\.js$/,
      include: [
        path.join(__dirname, 'playground'),
      ],
      exclude: [
        /(node_modules)/,
      ],
      loader: 'babel',
    },
  ];

  return loaders;
}


/**
 * Configurable Webpack config
 * @param  {object} config Configuration from gulpfile
 * @return {object}
 */
module.exports = function webpackConfig(config) {
  return {
    entry: config.scripts.src,
    output: {
      path: path.resolve(__dirname, config.scripts.dest),
      filename: '[name].js',
      library: 'AccessibleSubmenu',
      libraryTarget: 'umd',

    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.html', '.json', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.common.js',
      }
    },
    devtool: config.dev ? '#inline-source-map' : '',
    module: {
      loaders: getLoaders(config.dev),
    },

    plugins: getPlugins(config.dev),
    cache: {},
  };
};
