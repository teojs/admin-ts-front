import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import mixin from './mixin'
import components from './components'
import service from './service'

const app = createApp(App)

app
  .use(store)
  .use(service)
  .use(router)
  .use(components)

app.mixin(mixin)

app.mount('#app')
