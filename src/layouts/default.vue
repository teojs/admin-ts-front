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
            @update:value="addKeepAliveTab"
          />
        </n-scrollbar>
      </n-layout-sider>
    </n-config-provider>
    <n-layout class="main-layout">
      <n-layout-header>
        <div class="header">
          <!-- <n-breadcrumb class="breadcrumb">
            <n-breadcrumb-item
              v-for="route in $route.matched"
              :key="route.path"
            >
              <router-link :to="route.path">
                {{ route.meta.title }}
              </router-link>
            </n-breadcrumb-item>
          </n-breadcrumb> -->
          <keep-alive-tabs :tabs="keepAliveTabs" @onClose="rmKeepAliveTab" />
          <n-space class="right">
            <n-switch :default-value="isDark" @update:value="changeTheme">
              <template #checked-icon>
                <n-icon>
                  <MoonICon />
                </n-icon>
              </template>
              <template #unchecked-icon>
                <n-icon>
                  <SunIcon />
                </n-icon>
              </template>
            </n-switch>
            <n-dropdown
              trigger="hover"
              :options="userOpt"
              @select="handleUserOpt"
            >
              <n-button quaternary icon-placement="right">
                <template #icon>
                  <n-icon>
                    <AngleDownIcon />
                  </n-icon>
                </template>
                admin
              </n-button>
            </n-dropdown>
          </n-space>
        </div>
      </n-layout-header>
      <n-layout-content class="content">
        <app-router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, h, resolveComponent } from 'vue'
import type { VNode } from 'vue'
import type { MenuOption } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import {
  AngleDown as AngleDownIcon,
  Moon as MoonICon,
  Sun as SunIcon,
} from '@vicons/fa'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'DefaultLayouts',
  components: {
    AngleDownIcon,
    MoonICon,
    SunIcon,
  },
  data: () => ({
    darkTheme,
    userOpt: [
      {
        label: '退出登录',
        key: 'logout',
      },
    ],
    collapsedMenu: false,
    menuOptions: [] as any[],
    isDark: false,
  }),
  created() {
    this.extractMenu()
    this.isDark = this.colorScheme === 'dark'
  },
  methods: {
    renderMenuLabel(option: MenuOption): VNode | string | undefined {
      if (option.children) {
        return option.label as string
      }
      return h(
        resolveComponent('router-link') as string,
        {
          to: option.key,
        },
        { default: () => option.label }
      )
    },
    changeTheme(value: boolean) {
      const colorScheme = value ? 'dark' : 'light'
      this.$store.commit('app/switchTheme', colorScheme)
    },
    handleUserOpt(key: string) {
      switch (key) {
        case 'logout':
          this.$router.push('/login')
          break
      }
    },
    extractMenu() {
      const menuList = this.$api.comm.extractMenu({
        data: {
          routers: this.$router,
          checkAuth: false,
        },
      })
      this.menuOptions = menuList[0].children || []
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
    addKeepAliveTab(key: string, tab: MenuOption) {
      this.$store.commit('app/addKeepAliveTab', tab)
    },
    rmKeepAliveTab(tab: MenuOption, isActive: boolean) {
      this.$store.commit('app/rmKeepAliveTab', {
        tab,
        isActive,
      })
    },
  },
  computed: {
    ...mapState('app', ['colorScheme', 'keepAliveTabs']),
  },
})
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  padding: 10px;
  background-color: transparent !important;
  .main-layout {
    background-color: transparent !important;
    .header {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        margin-left: 20px;
      }
    }
    .content {
      margin-top: 10px;
      position: relative;
    }
  }
  .logo {
    font-size: 30px;
    padding: 10px;
    text-align: center;
    font-weight: bold;
  }
}
</style>
