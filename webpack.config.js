const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'react',
    'react-dom',
];

module.exports = {
    entry: {
        bundle: './src/index.jsx',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new webpack
            .optimize
            .CommonsChunkPlugin({
                "names": ['vendor', 'manifest']
            }),
        new HtmlWebpackPlugin({template: 'src/index.html', filename:'index.html',inject:'body'})
    ],
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: 'babel-loader',
                test: /\.jsx$/,
                exclude: /node_modules/
            },
            {
                use: [
                    'style-loader', 'css-loader'
                ],
                test: /\.css$/
            }
        ]
    }

};
