import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//解决消息框组件样式丢失
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-notification.css';

const app = createApp(App)

app.config.globalProperties.$ELEMENT = {
    size: 'small',
    zIndex: 3000
}

app.use(store).use(router).mount('#app')
