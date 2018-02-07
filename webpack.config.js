var path = require('path')
module.exports = {
    entry: './src/client/root.js', // 入口文件路径
    output: {
        //path是nodeJS的一个基础模块，这里用来获取绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    }
}