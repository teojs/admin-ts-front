/* eslint-disable no-console */

import fs from 'node:fs'
import path from 'node:path'
import { mergePath, getVarName, getPath } from './utils'
import { readAllFileSync } from './readAllFileSync'
import { readRouteInfo } from './readRouteInfo'
import { getImport } from './getImport'
import _ from 'lodash'
import format from 'prettier-eslint'

interface RouteInfo {
  meta?: {
    title?: string
  }
  sort?: boolean
  hidden?: boolean
  redirect?: string
  dynamic?: boolean
}

interface RouteRecordRaw extends RouteInfo {
  name?: string
  path: string
  component: string
  components?: string
  children?: RouteRecordRaw[]
}

interface DirStructure {
  filePath?: string
  index?: DirStructure
}

interface CusConfig {
  serviceDir: string
  apisDir: string
}

export default async function initRoutes(
  cusConfig: CusConfig
) {
  console.log('==正在初始化接口...')
  console.time('==初始化接口耗时：')

  // let routeImport: string = '// !!!此文件是自动生成的，请勿修改和提交到Git上!!! \n'

  // 获取全部vue文件并格式化结构关系
  const files = readAllFileSync(cusConfig.apisDir)
  const dirStructure: DirStructure = {}
  files.forEach(file => {
    const regExp = new RegExp(`${cusConfig.apisDir}/(.+?).ts`)
    const key = file.match(regExp)[1].replace(/\//g, '.')
    _.set(dirStructure, key, {
      filePath: file,
    })
  })

  console.log(dirStructure)

  // const routes = []

  // const createRoute = (
  //   routes: RouteInfo[],
  //   file: DirStructure,
  //   fileName: string,
  //   parentKey: string
  // ) => {
  //   if (!file.filePath && !file.index) {
  //     for (const key in file) {
  //       createRoute(
  //         routes,
  //         file[key],
  //         key,
  //         mergePath(parentKey, fileName)
  //       )
  //     }
  //     return
  //   }

  //   const routeInfo = readRouteInfo(file.filePath || file.index.filePath)
  //   let route: RouteRecordRaw

  //   if (file.index) {
  //     route = {
  //       name: getVarName(parentKey, fileName),
  //       component: `==${getVarName(parentKey, fileName)}==`,
  //       path: getPath(parentKey, fileName),
  //       children: [],
  //       ...routeInfo,
  //     }
  //     routes.push(route)

  //     routeImport += getImport(
  //       true,
  //       routeInfo.dynamic,
  //       parentKey,
  //       fileName,
  //       cusConfig
  //     )

  //     for (const key in file) {
  //       if (key !== 'index') {
  //         createRoute(
  //           route.children,
  //           file[key],
  //           key,
  //           mergePath(parentKey, fileName)
  //         )
  //       }
  //     }
  //     return
  //   }

  //   route = {
  //     name: getVarName(parentKey, fileName),
  //     component: `==${getVarName(parentKey, fileName)}==`,
  //     path: getPath(parentKey, fileName),
  //     ...routeInfo,
  //   }

  //   routeImport += getImport(
  //     false,
  //     routeInfo.dynamic,
  //     parentKey,
  //     fileName,
  //     cusConfig
  //   )

  //   routes.push(route)
  // }

  // for (const key in dirStructure) {
  //   createRoute(routes, dirStructure[key], key, '')
  // }

  // const routeFile = `
  //   ${routeImport}
  //   export default ${JSON.stringify(routes)}
  // `.replace(/=="|"==/g, '')

  // const formatConfig = {
  //   filePath: path.join(process.cwd(), '.eslintrc.js'),
  // }
  // const formatFile = await format({
  //   text: routeFile,
  //   ...formatConfig,
  // })
  // const routesFile = mergePath(
  //   process.cwd(),
  //   cusConfig.routerDir,
  //   'routes.ts'
  // )
  // fs.writeFileSync(
  //   routesFile,
  //   formatFile
  // )
  // console.log(
  //   '==接口初始化完毕，文件位置：',
  //   routesFile
  // )
  console.timeEnd('==初始化接口耗时：')
}
