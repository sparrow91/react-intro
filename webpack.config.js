const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: __dirname,
    entry: [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./js/ClientApp.jsx"],
    devtool: "cheap-eval-source-maps",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    stats: {
        color: true,
        reasons: true,
        chunks: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        hot: true,
        publicPath: '/public/',
        historyApiFallback: true
    }
}