const path = require('path')
const webpack = require('webpack')
const UglifyEsPlugin = require('uglify-es-webpack-plugin')

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]

if (process.env.NODE_ENV == 'production') {
  plugins.push(new UglifyEsPlugin())
}

module.exports = {
  entry: './javascripts/index.js',
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-0', 'react'] }
        }]
      }
    ]
  },
  plugins: plugins,
  devServer: {
    contentBase: './public'
  },
  devtool: 'source-map'
};
