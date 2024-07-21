import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Elementplus from 'element-plus'
import './assets/less.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Elementplus)
app.use(createPinia())
app.use(router)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }