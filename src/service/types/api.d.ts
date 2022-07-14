/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue'
import comm from '@/service/apis/comm'
import userbaseInfo from '@/service/apis/user/baseInfo'
import usergetUserInfo from '@/service/apis/user/getUserInfo'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: {
      comm: typeof comm
      user: {
        baseInfo: typeof userbaseInfo
        getUserInfo: typeof usergetUserInfo
      }
    }
  }
}
