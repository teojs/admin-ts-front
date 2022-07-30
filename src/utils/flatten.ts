/**
 * 元素为对象的数组扁平化
 * @param arr 目标数组
 * @param key 指定其中一个属性当作子数组
 * @returns 一维数组
 */
export function flattenObj(arr: any[], key: string): any[] {
  if (!Array.isArray(arr)) return []
  return arr.reduce((res, item) => {
    if (Array.isArray(item[key])) {
      return [...res, item, ...flattenObj(item[key], key)]
    }
    return [...res, item]
  }, [])
}
