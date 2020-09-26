const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({patterns: [
                { from: "./images", to: path.resolve(__dirname, 'dist/assets/images') }
            ]})
    ],
    devServer: {
        port: 7000,
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/fonts/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[name].[ext]'
                    }
                }
            },
        ]
    }
}