const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = function(env) {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    },
                },
            ],
        },
        plugins: [
            new ImageminPlugin({
                disable: env !== 'production',
                plugins: [
                    ImageminMozjpeg({
                        quality: 60,
                        progressive: true
                    })
                ]
            })
        ]
    };
};