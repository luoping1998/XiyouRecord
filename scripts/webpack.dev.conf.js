const baseWebpack = require('./webpack.base.conf');
const mergeWebpack = require('webpack-merge');


module.exports = mergeWebpack(baseWebpack, {
  mode: "development",
  module: {
      rules: [
          {
              test: /\.less$/,
              loaders: ['style-loader', 'css-loader', 'less-loader']
          }
      ]
  },
  devServer: {
      hot: true,
      port: 3000
  }
})

