const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { LoaderOptionsPlugin } = require("webpack");
const Dotenv = require('dotenv-webpack');



module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/app.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"), filename: "[main].[contenthash].bundle.js",
        clean: true
    },

    devtool: 'inline-source-map',
    devServer: {
        port: 5002,
        open: true,
        hot:true,
    },

    //loaders

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },

    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: "index.html",
            inject: "body",
        }),

        new Dotenv()

    ]

}