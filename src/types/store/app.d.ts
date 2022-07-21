export interface KeepAliveTab {
  title: string
  path: string
  fullPath: string
  name: string
  query?: {
    [x: string]: any
  }
}

export interface AppState {
  colorScheme: 'light' | 'dark'
  keepAliveTabs: KeepAliveTab[]
}
