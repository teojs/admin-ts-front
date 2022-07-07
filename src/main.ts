import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import mixin from './mixin'

const app = createApp(App)

app.use(store).use(router)

app.mixin(mixin)

app.mount('#app')
