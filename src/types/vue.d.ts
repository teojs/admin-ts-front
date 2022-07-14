/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { apis } from '../service'
import getUserInfo from '../service/apis/getUserInfo'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<any>
    $api: {
      getUserInfo: typeof getUserInfo
    }
  }
}
