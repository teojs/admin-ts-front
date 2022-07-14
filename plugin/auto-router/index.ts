import fs from 'node:fs'
import path from 'node:path'
import { isVue, isEmptyFile } from './src/utils'
import initRoutes from './src/initRoutes'
import initTemplate from './src/initTemplate'

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
      fs.watch(
        rootPath,
        { recursive: true },
        (eventType, fileName) => {
          const filePath = path.posix.join(rootPath, fileName)
          if (isVue(filePath)) {
            if (isEmptyFile(filePath)) {
              initTemplate(filePath)
            }
          }

          if (eventType === 'rename') {
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
