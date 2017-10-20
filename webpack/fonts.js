module.exports = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    },
                }
            ]
        }
    };
};