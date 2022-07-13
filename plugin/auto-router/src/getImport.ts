import { mergePath, getVarName } from './utils'

/**
 * 获取导入方式
 *
 * @param {boolean} isParent - 是否父级
 * @param {boolean} dynamic - 是否异步路由
 * @param {string} parentKey - 父级路径
 * @param {string} fileName - 文件名
 * @return {*}  {string} - 返回导入方式
 */
export function getImport(
  isParent: boolean,
  dynamic: boolean,
  parentKey: string,
  fileName: string
): string {
  let baseLink = `@/pages/${mergePath(parentKey, fileName)}`
  isParent ? baseLink += '/index.vue' : baseLink += '.vue'

  const varName = getVarName(parentKey, fileName)

  if (dynamic) {
    return `const ${varName} = () => import('${baseLink}');`
  } else {
    return `import ${varName} from '${baseLink}';`
  }
}
