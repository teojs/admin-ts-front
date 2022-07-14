/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue'
import { apis } from '@/service/index'
import getUserInfo from '@/service/apis/user/getUserInfo'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: {
      user: {
        getUserInfo: typeof getUserInfo
      }
    }
  }
}
