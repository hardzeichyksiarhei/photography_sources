const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const babel = require('./webpack/babel');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const html = require('./webpack/html');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'common': PATHS.source + '/common/common.js',
            'index': PATHS.source + '/pages/index/index.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    html(),
    images(),
    fonts()
]);

module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common,
            extractCSS(),
            babel(),
            uglifyJS()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            devserver(),
            sass(),
            babel(),
            css()
        ])
    }
};










