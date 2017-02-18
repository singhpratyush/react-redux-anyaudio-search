const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './aasearch/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './aasearch/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-class-properties', 'transform-decorators-legacy']
                }
            },

        ]
    },
    plugins: [HtmlWebpackPluginConfig, ]
};