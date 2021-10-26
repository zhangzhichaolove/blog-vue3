import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
    plugins: [
        vue(),
        //按需导入element-plus组件
        ViteComponents({
            customComponentResolvers: [ElementPlusResolver({
                importStyle: true
            })],
        }),
        //按需导入element-plus的css样式
        // styleImport({
        //     libs: [{
        //         libraryName: 'element-plus',
        //         esModule: true,
        //         resolveStyle: name => {
        //             return `element-plus/lib/theme-chalk/${name}.css`
        //         },
        //         // resolveComponent: (name) => {
        //         //     return `element-plus/lib/${name}`;
        //         // },
        //     },],
        // }),
    ],
    // root: process.cwd(),
    // base: '/',
    // publicDir: 'public',
    // resolve: {
    //     alias: {
    //         // 键必须以斜线开始和结束
    //         '/@/': './src'
    //     },
    // },
    // server: {
    //     proxy: {
    //         '/api': {
    //             target: 'https://api.pingping6.com/tools/baidutop/',
    //             changeOrigin: true,
    //             rewrite: path => path.replace(/^\/api/, '')
    //         }
    //     }
    // }
})