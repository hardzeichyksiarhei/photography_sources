module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    include: paths,
                    use: [{
                        loader: 'style-loader'
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: require('node-bourbon').includePaths
                        }
                    }]
                }
            ]
        }
    };
};