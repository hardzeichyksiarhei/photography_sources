module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                },
            ]
        }
    };
};