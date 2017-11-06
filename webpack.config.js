/**
 * Created by lizard on 17/10/25.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
     entry:__dirname+'/src/app/index.js',
     output:{
          path:__dirname+'/public',
         filename:"bundle-[hash].js"
     },

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react",'stage-0'
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/html/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],


};
