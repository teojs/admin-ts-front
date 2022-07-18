import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import mixin from './mixin'
import service from './service'
import 'normalize.css'
import '@/styles/index.less'

const app = createApp(App)

app
  .use(store)
  .use(service)
  .use(router)

app.mixin(mixin)

app.mount('#app')
