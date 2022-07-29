// 这里只放一些全局变量
import _ from 'lodash'
import { App } from 'vue'
import { message, notification, dialog, loadingBar } from './createDiscreteApi'
import dayjs from 'dayjs'
import invalidDate from './invalidDate'
import formatDate from './formatDate'
import getFormData from './getFormData'

dayjs.extend(invalidDate)

export default {
  install: (app: App) => {
    app.config.globalProperties.$_ = _
    app.config.globalProperties.$message = message
    app.config.globalProperties.$notification = notification
    app.config.globalProperties.$dialog = dialog
    app.config.globalProperties.$loadingBar = loadingBar
    app.config.globalProperties.$dayjs = dayjs
    app.config.globalProperties.$formatDate = formatDate
    app.config.globalProperties.$getFormData = getFormData
  },
}
