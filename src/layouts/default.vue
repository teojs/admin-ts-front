<template>
  <n-layout class="home" has-sider>
    <n-config-provider :theme="darkTheme">
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        show-trigger
        :collapsed="collapsedMenu"
        @collapse="collapsedMenu = true"
        @expand="collapsedMenu = false"
      >
        <n-scrollbar class="sider-scrollbar">
          <div v-show="!collapsedMenu" class="logo">LOGO</div>
          <n-menu
            :value="getCurrentMenu()"
            :indent="18"
            :collapsed="collapsedMenu"
            :collapsed-width="64"
            :options="menuOptions"
            :icon-size="16"
            :collapsed-icon-size="16"
            :render-label="renderMenuLabel"
          />
        </n-scrollbar>
      </n-layout-sider>
    </n-config-provider>
    <n-layout class="main-layout">
      <n-layout-header>
        <div class="header">
          <n-breadcrumb class="breadcrumb">
            <n-breadcrumb-item
              v-for="route in $route.matched"
              :key="route.path"
            >
              <router-link :to="route.path">
                {{ route.meta.title }}
              </router-link>
            </n-breadcrumb-item>
          </n-breadcrumb>
          <div class="right">
            <i
              :class="'iconfont icon-theme-' + $store.state.colorScheme"
              @click="changeTheme"
            />
            <n-dropdown
              trigger="hover"
              :options="userOpt"
              @select="handleUserOpt"
            >
              <n-button type="text" icon-placement="right">
                <template #icon>
                  <n-icon>
                    <AngleDownIcon />
                  </n-icon>
                </template>
                admin
              </n-button>
            </n-dropdown>
          </div>
        </div>
      </n-layout-header>
      <n-layout-content class="content">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, h, resolveComponent } from 'vue'
import type { MenuOption } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { AngleDown as AngleDownIcon } from '@vicons/fa'

export default defineComponent({
  name: 'DefaultLayouts',
  components: {
    AngleDownIcon,
  },
  data: () => ({
    darkTheme,
    userOpt: [
      {
        label: '修改密码',
        key: 'changePwd',
      },
      {
        label: '退出登录',
        key: 'logout',
      },
    ],
    collapsedMenu: false,
    menuOptions: [],
  }),
  methods: {
    renderMenuLabel(option: MenuOption) {
      if (option.children) {
        return option.label
      }
      return h(
        resolveComponent('router-link') as string,
        {
          to: option.path,
        },
        { default: () => option.label }
      )
    },
    changeTheme(colorScheme: 'dark' | 'light') {
      this.$store.commit('switchTheme', colorScheme)
    },
    handleUserOpt(key: string) {
      switch (key) {
        case 'logout':
          this.$router.push('/login')
          break
      }
    },
    extractMenu() {
      this.$api.comm.extractMenu({
        data: {
          routers: this.$router,
        },
      })
    },
    getCurrentMenu() {
      const matched = this.$route.matched
      for (let i = 0; i < matched.length; i++) {
        const isMenu = matched[i].meta.isMenu
        if (isMenu) {
          return matched[i].path
        }
      }
    },
  },
})
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
}
</style>
