const path = require('path')

module.exports = {
    context: __dirname,
    entry: "./js/ClientApp.jsx",
    devtool: "cheap-eval-source-maps",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    stats: {
        color: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        publicPath: '/public/',
        historyApiFallback: true
    }
}