const path = require('path');
const webpack = require('webpack');

// https://webpack.js.org/configuration/configuration-types/#exporting-a-function-to-use-env
module.exports = function(env) {
  const isDev = env.production === 'dev';
  const config = {
    entry: {
      'app': ['./src/index']
    },
    output: {
      path: path.resolve(__dirname, 'client', 'assets'),
      filename: 'bundle.js',
      publicPath: "/assets/",
      pathinfo: true
    },

    devtool: 'eval',

    module: {
      rules: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-2']
          }
        }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }, {
          test: /\.sc|ass$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            }, {
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        }, {
          test: /\.(ttf|png)/,
          use: ['file-loader']
        }
      ]
    },

    performance: {
      hints: "warning", // enum
      maxAssetSize: 200000, // int (in bytes),
      maxEntrypointSize: 400000, // int (in bytes)
      assetFilter: function(assetFilename) {
        // Function predicate that provides asset filenames
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
      }
    },

    devServer: {
      contentBase: path.join(__dirname, 'client'), // boolean | string | array, static file location
      compress: true, // enable gzip compression
      historyApiFallback: true, // true for index.html upon 404, object for multiple paths
      hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
      inline: true,
      https: false, // true for self-signed, object for cert authority
      noInfo: true, // only errors & warns on hot reload
      publicPath: "/assets/", // https://webpack.js.org/configuration/dev-server/#devserver-publicpath-,
    },

    watch: isDev
      ? true
      : false,

    plugins: isDev
      ? [// development plugins
        new webpack.HotModuleReplacementPlugin()]
      : [
        // production plugins
      ]
  }

  return config;
};
