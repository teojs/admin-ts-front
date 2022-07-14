/* eslint-disable no-console */

import fs from 'node:fs'
import path from 'node:path'
import { mergePath, getVarName } from './utils'
import { readAllFileSync } from './readAllFileSync'
import _ from 'lodash'
import format from 'prettier-eslint'

interface DirStructure {
  filePath?: string
  index?: DirStructure
}

interface CusConfig {
  serviceDir: string
  apisDir: string
}

export default async function initRoutes(cusConfig: CusConfig) {
  console.log('==正在初始化接口...')
  console.time('==初始化接口耗时：')

  // let routeImport: string = '// !!!此文件是自动生成的，请勿修改和提交到Git上!!! \n'

  // 获取全部vue文件并格式化结构关系
  const files = readAllFileSync(cusConfig.apisDir)
  const dirStructure: DirStructure = {}
  let apiImport = ''
  files.forEach(file => {
    const regExp = new RegExp(`${cusConfig.apisDir}/(.+?).ts`)
    const key = file.match(regExp)[1].replace(/\//g, '.')
    console.log(key)
    _.set(dirStructure, key, `==typeof ${getVarName(key)}==`)

    apiImport += `import ${getVarName(key)} from '${file.replace(
      'src',
      '@'
    ).replace('.ts', '')}'\n`
  })
  console.log(apiImport)

  console.log(dirStructure)

  const apisDeclareContent = `
    /* eslint-disable no-unused-vars */
    import { ComponentCustomProperties } from 'vue'
    ${apiImport}
    
    declare module '@vue/runtime-core' {
      interface ComponentCustomProperties {
        $api: ${JSON.stringify(dirStructure, null, 2)}
      }
    }
    
  `.replace(/=="|"==/g, '')

  const formatConfig = {
    filePath: path.join(process.cwd(), '.eslintrc.js'),
  }
  const formatFile = await format({
    text: apisDeclareContent,
    ...formatConfig,
  })
  const apisDeclareFile = mergePath(
    process.cwd(),
    cusConfig.serviceDir,
    'types/api.d.ts'
  )
  fs.writeFileSync(apisDeclareFile, formatFile)
  console.log('==接口初始化完毕，文件位置：', apisDeclareFile)
  console.timeEnd('==初始化接口耗时：')
}
