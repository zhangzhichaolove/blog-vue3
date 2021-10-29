import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//解决消息框组件样式丢失
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-notification.css';
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App)

app.config.globalProperties.$ELEMENT = {
  size: 'small',
  zIndex: 3000
}

app.use(store).use(router).use(VMdEditor).use(VMdPreview).mount('#app')
