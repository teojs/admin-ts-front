// 这里只放一些全局变量

import _ from 'lodash'
import { App } from 'vue'
export default {
  install: (app: App) => {
    app.config.globalProperties.$_ = _
  },
}
