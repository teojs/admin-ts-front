import fs from 'node:fs'
import path from 'node:path'
import { isVue, isEmptyFile } from './src/utils'
import initRoutes from './src/initRoutes'
import initTemplate from './src/initTemplate'

interface ConfigEnv {
  mode: string
  command: 'serve' | 'build'
}

const pagesRoot = 'src/pages'

const autoRouter = () => ({
  name: 'auto:router',
  async config(_config: any, { command }: ConfigEnv) {
    await initRoutes()
    if (command === 'serve') {
      const rootPath = path.join(process.cwd(), pagesRoot)
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
              initRoutes()
            }, 300)
          }
        })
    }
  },
})

export default autoRouter
