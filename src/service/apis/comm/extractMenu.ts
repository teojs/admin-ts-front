import type { Router, RouteRecordRaw } from 'vue-router'
import _ from 'lodash'
import { h } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import type { AxiosRequestConfig } from 'axios'

interface IRequestConfig extends AxiosRequestConfig {
  data: {
    routers: Router
  }
}
/**
 * 提取菜单
 *
 * @export
 * @param {IRequestConfig} ctx
 * @return {*}  {MenuOption[]}
 */
export default function api(ctx: IRequestConfig): RouteRecordRaw[] | undefined {
  let menuKeys: string[] | string | null = sessionStorage.getItem('menuKeys')
  if (menuKeys) {
    const menuOption: MenuOption = []
    menuKeys = JSON.parse(menuKeys) as string[]
    function renderIcon(icon: string) {
      return () => h(NIcon, null, { default: () => h(icon) })
    }
    const menuList = ctx.data?.routers.options.routes[0]
    const sort = (routers: RouteRecordRaw) => {
      // 先排序
      routers.children = _.sortBy(routers.children, 'sort')

      // 渲染图标
      if (routers.meta?.icon) {
        routers.meta.icon = renderIcon(
          (routers.meta.icon as string) || 'BookOpen'
        )
      }

      // 再过滤不显示的路由
      routers.children = _.filter(
        routers.children,
        (o) => !o.meta?.hidden && _.includes(menuKeys, o.name)
      )

      if (routers.children && !routers.children.length) {
        // 删除空的children
        delete routers.children
      } else {
        routers.children.forEach((router) => {
          router.label = router.meta.title
          router.key = router.path
          if (router.children) {
            sort(router)
          }
        })
      }
    }
    sort(menuList)
    return menuList.children
  }
}
