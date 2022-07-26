import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import mixin from './mixins/global'
import service from './service'
import 'normalize.css'
import '@/styles/index.less'
import utils from './utils'

const app = createApp(App)

app.use(store).use(service).use(router).use(utils)

app.mixin(mixin)

app.mount('#app')
