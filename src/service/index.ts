import http from './axiosConfig'
import _ from 'lodash'
import { App } from 'vue'

// 自动注册/src/service/apis的所以接口

interface IApis {
  $http: typeof http
}

const apis: IApis = {
  $http: http,
}
const allApis = import.meta.globEager('./apis/**/*.ts')
for (const key in allApis) {
  const path = key.match(/\.\/apis\/(.+?)\.ts/)![1].replace(/\//g, '.')
  _.set(apis, path, allApis[key].default)
}

// 自动注册/src/service/apis的所以接口

export { apis }

export default {
  install: (app: App) => {
    app.config.globalProperties.$api = apis
  },
}
