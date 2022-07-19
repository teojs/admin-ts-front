// 这里只放一些全局变量

import _ from 'lodash'
import { App } from 'vue'
import { message, notification, dialog, loadingBar } from './createDiscreteApi'
export default {
  install: (app: App) => {
    app.config.globalProperties.$_ = _
    app.config.globalProperties.$message = message
    app.config.globalProperties.$notification = notification
    app.config.globalProperties.$dialog = dialog
    app.config.globalProperties.$loadingBar = loadingBar
  },
}
