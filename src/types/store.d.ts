export interface RootState {
  userInfo: {
    userName: string
    token: string
  }
  colorScheme: 'light' | 'dark'
}
