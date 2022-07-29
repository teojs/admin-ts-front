/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { LoDashStatic } from '@types/lodash'
import dayjs from 'dayjs'
import {
  message,
  notification,
  dialog,
  loadingBar,
} from '@/utils/createDiscreteApi'
import FormatDate from '@/utils/formatDate'
import GetFormData from '@/utils/getFormData'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<any>
    $_: LoDashStatic
    $message: typeof message
    $notification: typeof notification
    $dialog: typeof dialog
    $loadingBar: typeof loadingBar
    $dayjs: typeof dayjs
    $formatDate: FormatDate
    $getFormData: GetFormData
  }
  interface GlobalComponents {
    Former: typeof import('@/components/Former.vue')['default']
    Searcher: typeof import('@/components/Searcher.vue')['default']
  }
}
