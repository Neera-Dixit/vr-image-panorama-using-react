var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')

var clientBuildPath = path.resolve(__dirname, 'public','assets','build');
var clientMainPath = path.resolve(__dirname, 'src','components','index.js');


 module.exports = [

    {
         name : 'client',
         target : 'web',
         entry:  [
                    clientMainPath
                ],
         output: {
             path: clientBuildPath,
             publicPath: '/assets/',
             filename: 'bundleclient.js'
         },
         module: {
             loaders: [{
                 test: /\.jsx?$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader'
            }]
         },
         plugins: [
            new webpack.optimize.UglifyJsPlugin({
              minimize: true,
              compress: {
                warnings: false
              }
            }),
            new webpack.DefinePlugin({
              'process.env': {
                'NODE_ENV': JSON.stringify('production')
                }
            })

        ],
         devServer: {
            inline:true
         }
    }

 ];
