const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {

    index: './src/index.js',

    print: './src/print.js',

  },
  devtool: 'inline-source-map',
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

    ],

  },
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Development',
      template: './src/index.html'

    }),

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};