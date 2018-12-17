const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const config = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: "/public/"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@src': resolve('src'),
      '@layout': resolve('src/layout'),
      '@components': resolve('src/components'),
      '@store': resolve('src/store'),
      '@views': resolve('src/views'),
      '@config': resolve('src/config'),
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, 'template.html')
    })
  ]
}

if (isDev) {
  config.mode = 'development'
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ]
  }
  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: '8888',
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
