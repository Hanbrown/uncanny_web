const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        static: "./dist"
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|obj)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({ title: "Hot Reloading Enabled" })
    ],

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};