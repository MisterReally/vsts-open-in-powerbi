var path = require("path");
var webpack = require("webpack");

module.exports = {
    target: "web",
    entry: {
        app: "./src/app.ts"
    },
    output: {
        filename: "[name].bundle.js",
        libraryTarget: "amd"
    },
    devtool: "source-map",
    externals: [
        /^VSS\/.*/, 
        /^TFS\/.*/, 
        "jszip"
    ],
    resolve: {
        extensions: ["*",".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        modules: [
            path.resolve("./src"),
            path.resolve("./lib"),
            "node_modules"
        ]
    },
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     enforce: "pre",
            //     loader: "tslint-loader",
            //     options: {
            //         emitErrors: true,
            //         failOnHint: true
            //     }
            // },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
}