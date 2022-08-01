export interface KeepAliveTab {
  title: string
  path: string
  fullPath: string
  name: string
  query?: {
    [x: string]: any
  }
  caches?: string[]
}

export interface CachesTreeNode {
  name: string
  count: number
}

export interface AppState {
  colorScheme: 'light' | 'dark'
  keepAliveTabs: KeepAliveTab[]
  cachesRecord: CachesTreeNode[]
}
