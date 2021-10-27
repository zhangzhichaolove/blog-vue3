import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//解决消息框组件样式丢失
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-notification.css';

createApp(App).use(store).use(router).mount('#app')

console.log('当前环境---->', process.env.NODE_ENV);
