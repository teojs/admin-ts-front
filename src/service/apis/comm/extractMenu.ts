import type { Router, RouteRecordRaw } from 'vue-router'
import _ from 'lodash'
import { h } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import type { AxiosRequestConfig } from 'axios'

interface IRequestConfig extends AxiosRequestConfig {
  data: {
    // 传入路由来提取
    routers: Router
    // 是否启用权限校验
    checkAuth: boolean
  }
}

/**
 * 提取菜单
 *
 * @export
 * @param {IRequestConfig} ctx
 * @return {*}  {MenuOption[]}
 */
export default function api(ctx: IRequestConfig): MenuOption[] {
  let menuKeys: string[] | string | null = sessionStorage.getItem('menuKeys')

  const menu: MenuOption[] = []
  const routes = ctx.data?.routers.options.routes

  try {
    menuKeys = JSON.parse(menuKeys as string) || []
  } catch (error) {
    menuKeys = []
  }

  function renderIcon(icon: string | undefined) {
    return () => h(NIcon, null, { default: () => h(icon || 'default') })
  }
  function getMenuOption(
    routes: readonly RouteRecordRaw[],
    children: MenuOption[]
  ) {
    const sortedRoutes = _.sortBy(routes, 'meta.sort')
    sortedRoutes.forEach((o) => {
      // 是否启用权限过滤
      const checkAuth: boolean =
        menuKeys!.includes(o.path) && ctx.data.checkAuth
      if (!o.meta?.hidden && !checkAuth) {
        const menuOption: MenuOption = {
          label: o.meta?.title,
          key: o.path,
          icon: renderIcon(o.meta?.icon),
          meta: o.meta,
        }
        children.push(menuOption)
        if (o.children && o.children.every((o) => o.meta?.isMenu)) {
          menuOption.children = []
          getMenuOption(o.children, menuOption.children)
        }
      }
    })
  }

  getMenuOption(routes, menu)

  return menu
}
