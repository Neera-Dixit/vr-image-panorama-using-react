var path = require('path');
var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');


module.exports =

    {
        context: path.resolve('src'),

        name: 'client',

        target: 'web',

        entry: ['./components/index'],

        output: {
            path: path.resolve('build'),
            publicPath: "/build/",
            filename: "./js/bundle.js",
        },

        plugins: [
        new extractTextPlugin({ // define where to save the file
                filename: './css/style.css',
                allChunks: true,
            })],

        module: {
            rules: [
                {
                    test: /\.(js|jsx|es6)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
            },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    loader: extractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader!autoprefixer-loader'
                    })
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1000'
            }
        ]
        },
         resolve: {
        extensions: ['.js', '.es6', '.jsx', '.css']
    }
    };