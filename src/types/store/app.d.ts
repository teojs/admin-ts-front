import type { MenuOption } from 'naive-ui'

export interface AppState {
  colorScheme: 'light' | 'dark'
  keepAliveTabs: MenuOption[]
}
