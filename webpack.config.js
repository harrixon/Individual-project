// webpack.config.js

const path = require('path')

const TerserPlugin = require('terser-webpack-plugin');

const jsConfig = {
    entry: './public/javascripts/app.js',
    mode: 'development',
    output: {
        filename: 'bundle-min.js',
        path: path.resolve(__dirname, 'public/javascripts')
    },
    optimization: {
        minimizer: [
            // 压缩JS
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                // 等等详细配置见官网
            }),
        ]
    }
}

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssertsPlugin = require('optimize-css-assets-webpack-plugin')

const cssConfig = {
    entry: './public/stylesheets/style.scss',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/stylesheets')
    },
    module: {
        rules: [{
                test: /\.(sc|sa|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [
                                // 可以配置多个插件
                                require('autoprefixer')
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|ttf|otf)$/i,
                use: [{
                    loader: 'file-loader',
                }],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 指定輸出位置
            // [name] 為上方進入點設定的 "名稱"
            filename: "style.css",
            sourceMap: true,
            hmr: process.env.NODE_ENV === 'development',
        })
    ],
    optimization: {
        minimizer: [
            // 压缩CSS
            new OptimizeCSSAssertsPlugin({})
        ]
    }
}



module.exports = [jsConfig ,cssConfig];