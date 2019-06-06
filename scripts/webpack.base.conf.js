const htmlPlugin = require('html-webpack-plugin');

const { resolve } = require('path');
module.exports = {
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    entry: {
        index: [resolve(__dirname, '../src/app.tsx'), resolve(__dirname, '../index.html')]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json", "less"],
        // 配置别名
        alias: {
            '@': resolve(__dirname, '../src'),
            "api": resolve(__dirname, "../src/api/"),
            "component": resolve(__dirname, "../src/component/"),
            "images": resolve(__dirname, "../src/images/"),
            "pages": resolve(__dirname, "../src/pages/"),
            "styles": resolve(__dirname, "../src/styles/"),
            "types": resolve(__dirname, "../src/types/"),
            "routes": resolve(__dirname, "../src/routes/"),
            "utils": resolve(__dirname, "../src/utils/")
        }
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                loader: 'html-loader'
            },
            {
                test: /\.tsx?$/,
                include: [resolve(__dirname, '../src')],
                exclude: /node_modules/,
                use: [
                    { loader: "awesome-typescript-loader" }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5*1024,
                            outputPath: 'static/imgs/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            filename: 'index.html',
            template: resolve(__dirname, '../index.html') 
        })
    ]
}