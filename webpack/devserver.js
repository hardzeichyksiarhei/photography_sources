module.exports = function () {
    return {
        devServer: {
            proxy: {
                "/photography": {
                    target: "http://localhost:9000",
                    pathRewrite: {"^/photography" : ""}
                }
            },
            stats: 'errors-only',
            port: 9000
        }
    }
};



