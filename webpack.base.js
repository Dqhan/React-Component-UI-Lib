const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'newda-lib.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: [
                        [
                            "import",
                            {
                                libraryName: "newda-lib",
                                camel2DashComponentName: false,
                                camel2UnderlineComponentName: false,
                                customName: (name) => {
                                    return `../../Lib/${name}`;
                                },
                                style: false,
                            },
                        ],
                    ],
                },
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ttf|woff|eot)$/,
                use: [
                    'url-loader',
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new MiniCssExtractPlugin({
            filename: 'newda-lib-style.css'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".less"]
    },
    externals: {

    }
}