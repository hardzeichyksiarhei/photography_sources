const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: [{
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader",
                            options: {
                                includePaths: require('node-bourbon').includePaths
                            }
                        }]
                    }),
                },
                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader',
                    }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin({
                filename: './css/[name].css',
                allChunks: true
            }),
            // new OptimizeCssAssetsPlugin({
            //     assetNameRegExp: /\.css$/g,
            //     cssProcessor: require('cssnano'),
            //     cssProcessorOptions: { discardComments: {removeAll: true } },
            //     canPrint: true
            // })
        ],
    };
};