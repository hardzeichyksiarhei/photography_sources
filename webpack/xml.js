module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.xml$/,
                    loader: 'xml-loader'
                },
            ],
        },
    };
};