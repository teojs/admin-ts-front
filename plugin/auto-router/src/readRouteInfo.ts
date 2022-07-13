import fs from 'node:fs'
import { parse } from 'vue/compiler-sfc'
import { isEmptyFile } from './utils'
import initTemplate from './initTemplate'

interface RouteInfo {
  meta?: {
    title?: string
  }
  sort?: boolean
  hidden?: boolean
  redirect?: string
  dynamic?: boolean
  chunk?: string
}

/**
 * 读取自定义路由信息
 *
 * @param {string} filePath
 * @return {*}  {RouteInfo}
 */
export function readRouteInfo(filePath: string): RouteInfo {
  try {
    // 读取自定义的路由信息
    if (isEmptyFile(filePath)) {
      initTemplate(filePath)
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const customBlocks = parse(fileContent).descriptor.customBlocks
    return JSON.parse(
      customBlocks.filter(o => o.type === 'route')[0].content
    )
  } catch {
    return {}
  }
}
