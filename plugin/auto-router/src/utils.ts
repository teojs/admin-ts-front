import fs from 'node:fs'
import path from 'node:path'

/**
 * 校验是否Vue文件
 *
 * @param {string} filePath
 * @return {*}  {boolean}
 */
export function isVue(filePath: string): boolean {
  return (
    fs.existsSync(filePath) &&
    fs.statSync(filePath).isFile() &&
    path.extname(filePath) === '.vue'
  )
}

/**
 * 校验是否文件夹
 *
 * @param {string} filePath
 * @return {*}  {boolean}
 */
export function isDir(filePath: string): boolean {
  return fs.statSync(filePath).isDirectory()
}

/**
 * 合并路径
 *
 * @export
 * @return {*}  {string}
 */
export function mergePath(...paths: string[]): string {
  return path.posix.join(...paths)
}

/**
 * 转首字母大写
 *
 * @param {string} word
 * @return {*}  {string}
 */
export function firstUpperCase(word: string): string {
  if (!word) return ''
  word = word.replace(/_|\.|\//g, '')
  const [a, ...z]: string[] = word.split('')
  return a.toUpperCase() + z.join('')
}

export function getVarName($1: string, $2: string): string {
  return firstUpperCase($1) + firstUpperCase($2)
}

export function getPath($1: string, $2: string): string {
  return path.posix.join('/', $1, $2).replace('_', ':')
}

export function getComponentName(fullPath: string): string {
  try {
    const regExp = /pages(.+?).vue/
    const paths = fullPath
      .match(regExp)[1]
      .split(/\/|\\/)
      .map(firstUpperCase)
    return paths.join('')
  } catch (error) {
    return 'unknown'
  }
}

/**
 * 校验是否空文件
 *
 * @export
 * @param {string} filePath
 * @return {*}  {boolean}
 */
export function isEmptyFile(filePath: string): boolean {
  const file = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  })
  return Boolean(!file)
}
