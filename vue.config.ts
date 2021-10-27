import { ProjectOptions } from '@vue/cli-service'
import Components from 'unplugin-vue-components/webpack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const conf: ProjectOptions = {
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
                pathRewrite: { '^/api': '' },
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: 'http://localhost:4000'
            }
        }
    },
    // configureWebpack: config => {
    //     config.plugins.push(Components({
    //         resolvers: [ElementPlusResolver()],
    //     }))
    //     config.plugins.push(new CompressionPlugin({
    //         test: /\.(js|css)?$/i, // 哪些文件要压缩
    //         filename: '[path].gz[query]', // 压缩后的文件名
    //         algorithm: 'gzip', // 使用gzip压缩
    //         minRatio: 1, // 压缩率小于1才会压缩
    //         deleteOriginalAssets: false // 删除未压缩的文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false
    //     }))
    //     config.optimization.minimize = true
    //     config.optimization.minimizer.push(new UglifyJsPlugin({
    //         uglifyOptions: {
    //             warnings: false,
    //             compress: {
    //                 drop_console: true,
    //                 drop_debugger: false,
    //                 pure_funcs: ["console.log"]
    //             }
    //         }
    //     }))
    // }
    // configureWebpack: {
    //     plugins: [
    //         Components({
    //             resolvers: [ElementPlusResolver()],
    //         }),
    //     ]
    // }
}

module.exports = conf