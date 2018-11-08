const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: ['./src/index.js'],
    watch: process.env.NODE_ENV === 'development' ? true : false,
    output: {
        library: 'Calendar',
        libraryTarget: 'var',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    devtool: 'source-map'
}