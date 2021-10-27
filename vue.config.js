const Components = require('unplugin-vue-components/webpack')
const {
    ElementPlusResolver
} = require('unplugin-vue-components/resolvers')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@/*', resolve('src'))
    },
    devServer: {
        overlay: {
            warning: false,
            errors: false
        },
        // proxy: 'http://localhost:4000',
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: {
                    '^/api': ''
                },
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: 'http://localhost:4000'
            }
        }
    },
    // configureWebpack: {
    //     plugins: [
    //         Components({
    //             resolvers: [ElementPlusResolver()],
    //         }),
    //         // 开启js、css压缩
    //         new CompressionPlugin({
    //             test: /\.(js|css)?$/i, // 哪些文件要压缩
    //             filename: '[path].gz[query]', // 压缩后的文件名
    //             algorithm: 'gzip', // 使用gzip压缩
    //             minRatio: 1, // 压缩率小于1才会压缩
    //             deleteOriginalAssets: false // 删除未压缩的文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false
    //         })
    //     ],
    //     optimization: {
    //         minimizer: [
    //             new UglifyJsPlugin({
    //                 uglifyOptions: {
    //                     warnings: false,
    //                     compress: {
    //                         drop_console: true,
    //                         drop_debugger: false,
    //                         pure_funcs: ["console.log"]
    //                     }
    //                 }
    //             })
    //         ]
    //     }
    // },
    configureWebpack: config => {
        config.plugins.push(Components({
            resolvers: [ElementPlusResolver()],
        }))
        // 开启js、css压缩
        if (process.env.NODE_ENV === 'production') { //development
            config.plugins.push(new CompressionPlugin({
                test: /\.(js|css)?$/i, // 哪些文件要压缩
                filename: '[path].gz[query]', // 压缩后的文件名
                algorithm: 'gzip', // 使用gzip压缩
                threshold: 10240, // 对超过10k的数据压缩
                minRatio: 1, // 压缩率小于1才会压缩
                deleteOriginalAssets: false // 删除未压缩的文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false
            }))
            config.optimization.minimize = true
            config.optimization.minimizer.push(new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        drop_console: true,
                        drop_debugger: false,
                        pure_funcs: ["console.log"]
                    }
                }
            }))
        }
    },
    // chainWebpack: config => {
    //     // 解决ie11兼容ES6
    //     config.entry('main').add('babel-polyfill')
    //     // 开启图片压缩
    //     config.module.rule('images')
    //         .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    //         .use('image-webpack-loader')
    //         .loader('image-webpack-loader')
    //         .options({
    //             bypassOnDebug: true
    //         })
    // },
    // transpileDependencies: [
    //     'biyi-admin', // 指定对第三方依赖包进行babel-polyfill处理
    // ]

}