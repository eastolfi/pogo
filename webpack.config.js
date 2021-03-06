const path = require("path");
const webpack = require("webpack");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    // optimization: {
    //     minimize: true
    // },
    entry: {
        "index": "./public/tsc/index.ts"
        // "index.min": "./public/tsc/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "[name].js",
        libraryTarget: "umd",
        library: "PoGO",
        umdNamedDefine: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            Vue: path.resolve(__dirname, "./node_modules/vue/dist/vue.esm.js"),
            "@assets": path.resolve(__dirname, "./public/assets/")
        }
    },
    devtool: "source-map",
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             sourceMap: true,
    //             include: /\.min\.js$/,
    //             exclude: /node_modules/
    //         })
    //     ]
    // },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         minimize: true,
    //         sourceMap: true,
    //         include: /\.min\.js$/,
    //     })
    // ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "awesome-typescript-loader",
                    options: {
                        exclude: [/node_modules/],
                        declaration: false
                    }
                }]
            }, {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
};
