const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }
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