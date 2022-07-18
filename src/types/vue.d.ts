/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import 'vue-router'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<any>
  }
}
