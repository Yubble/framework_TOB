import { createApp } from 'vue'
// vue3 UI库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 状态管理
import { createPinia } from 'pinia'
// 路由表
import router from './router'
// 视图入口
import App from './App.vue'

import '@/assets/style/reset.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
