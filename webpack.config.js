// This file sets up the bundler program so we know what files to watch

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        static: "./dist",
    },

    module: {
        rules: [
            // Add resource file extensions here
            {
                test: /\.(png|jpg|jpeg|obj)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    // Use custom template file for HTML
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
    ],

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
