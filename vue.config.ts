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
    configureWebpack: {
        plugins: [
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ]
    }
}

module.exports = conf