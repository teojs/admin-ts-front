export {}

declare module 'vue-router' {
  export interface RouteMeta {
    title: string
    sort?: number
    hidden?: boolean
    requiresAuth?: boolean
    icon?: string
    keepAlive?: boolean
  }
}
