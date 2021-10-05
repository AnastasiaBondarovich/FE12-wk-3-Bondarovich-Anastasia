const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path:path.resolve(__dirname, 'build'), 
    filename: '[name].[contenthash].js', 
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: {index: '/'},
    open: true
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './public/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {loader: "css-loader", 
            options: {
              modules: {
                localIdentName: "[path][name]__[local]_[hash:base64:5]",
              },
              sourceMap: true,
            }
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: {
            loader: "file-loader",
        },
      },
    ],
  }, 
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
}