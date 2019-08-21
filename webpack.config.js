const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')

let config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true //For react router
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 
          {
            loader: 'style-loader'
          },
          {  
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [ 
          {
            loader: 'style-loader'
          },
          {  
            loader: 'css-loader'
          },
          {  
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html"
    })
  ]
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }))
  }

  if (argv.mode === 'production') {
    //...
  }

  return config;
};