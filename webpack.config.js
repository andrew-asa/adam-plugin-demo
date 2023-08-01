const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    // devtool: "source-map",
    mode: 'development',
    //stats: "verbose",
    entry: './src/preload/index.ts',  // 入口文件路径
    output: {
        filename: 'preload/index.js',  // 输出文件名
        path: path.resolve(__dirname, 'dist')  // 输出路径
    },
    resolve: {
        extensions: ['.ts', '.js'],  // 解析的文件扩展名
        alias: {
            '@': path.resolve(__dirname, 'src'),  // 将 "@/" 映射到 "src" 目录
            '@base': path.resolve(__dirname, 'src/base'),  // 将 "components/" 映射到 "src/components" 目录
            '@preload': path.resolve(__dirname, 'src/preload'),  // 将 "components/" 映射到 "src/components" 目录
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.node.json', // 指定 tsconfig.json 文件
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    target: 'node',
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    optimization: {
        minimize: false, // 禁用代码压缩
    },
};
