import path from 'node:path'
import { isVue, isEmptyFile } from './src/utils'
import initRoutes from './src/initRoutes'
import initTemplate from './src/initTemplate'
import { watchTree } from 'watch'

interface ConfigEnv {
  mode: string
  command: 'serve' | 'build'
}

interface CusConfig {
  pagesDir: string
  layoutsDir: string
  routerDir: string
}

const autoRouter = (cusConfig: CusConfig) => ({
  name: 'auto:router',
  async config(_config: any, { command }: ConfigEnv) {
    const pagesDir = cusConfig.pagesDir || 'src/pages'
    await initRoutes(cusConfig)
    if (command === 'serve') {
      const rootPath = path.join(process.cwd(), pagesDir)
      let timer: NodeJS.Timeout = null
      watchTree(rootPath, function(filePath, curr, prev) {
        if (isVue(filePath)) {
          if (isEmptyFile(filePath)) {
            initTemplate(filePath, 'fileName')
          }
        }
        if (curr !== null && prev !== null) {
          clearTimeout(timer)
          timer = setTimeout(() => {
            initRoutes(cusConfig)
          }, 300)
        }
      })
    }
  },
})

export default autoRouter
