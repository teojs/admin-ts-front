/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface WWLoginConfig {
  id: string
  appid: string
  agentid: string
  redirect_uri: string
  state: string
  href: string
  lang: string
}

declare module '@/utils/wwLogin-1.2.7.js' {
  export default class WWLogin {
    constructor(config: WWLoginConfig)

    destroyed() {}
  }
}
