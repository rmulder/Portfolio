const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BitBarWebpackProgressPlugin = require("bitbar-webpack-progress-plugin");

const cssExtract = new ExtractTextPlugin('style/[name].css');
const imageExtract = new ExtractTextPlugin('assets/img/[name].jpg');

module.exports = {
  entry: './src/typescript/index.tsx',
  devtool: 'inline-source-map',
  mode: "development",
  devServer: {
    contentBase: './dist'
  },
  module: {
    //Rules for loading files
    rules: [
      //Loads typescript files
      {
        "test": /\.(tsx|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      //Load sass files
      {
        test: /\.(scss|sass)$/,
        use: cssExtract.extract(
          {
            fallback: "style-loader",
            use: [
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
            ]
          }
        )
      },

      //Load images and output them seperately
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [

          {
            'loader' : 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/'
            }
          }
          
        ]
      }

    ]
  },
  //output bundle js file
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins:[
    //Extracts css files to seperate directory
    cssExtract,
    //Generates processed index file
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    //Cleans the dist directory on build
    new CleanWebpackPlugin(['dist']),
    //Visual Code Plugin to update progress bar
    new BitBarWebpackProgressPlugin()
  ]
}