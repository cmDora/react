const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractCss = require('mini-css-extract-plugin')
// const PurifyCssWebpack = require('purifycss-webpack')
// const glob = require('glob')
const isDev = process.env.NODE_ENV === 'development'

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const config = {
  mode: isDev ? 'development' : 'production',
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
      '@static': resolve('src/static')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|jpeg|svg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /\.css$/,
        use: [ExtractCss.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [ExtractCss.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new ExtractCss({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlPlugin({
      template: path.join(__dirname, 'template.html')
    }),
    new webpack.DefinePlugin({ // <-- 减少 React 大小的关键
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

if (isDev) {
  console.log(1)
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-dom', 'antd'],
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
  config.optimization = {
    minimize: false,
    splitChunks: {
      hidePathInfo: false,
      minSize: 10000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
   }
  }
  config.plugins.push(new webpack.NamedModulesPlugin())
  config.plugins.push(new webpack.NamedChunksPlugin())
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  console.log(2)
  config.entry = {
    app: path.join(__dirname, 'src/index.js')
  }
  config.optimization = {
    minimize: true,
    splitChunks: {
      hidePathInfo: true,
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
    }
  }
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
}

module.exports = config
