const path = require("path");
	
module.exports = {
    entry: './src/Game.ts',
    output: {
        filename: 'Game.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    mode: "development",
    devtool: 'source-map',

};
