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
      <n-layout-header class="header">
        <div class="topbar">
          <div class="left">
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
          </div>
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
        <keep-alive-tabs :tabs="keepAliveTabs" @onClose="rmKeepAliveTab" />
      </n-layout-header>
      <router-view v-slot="{ Component, route }">
        <transition name="route-transform" mode="out-in">
          <keep-alive>
            <n-layout-content :key="route.name || ''" class="content">
              <keep-alive>
                <component :is="Component" :key="route.name || ''" />
              </keep-alive>
            </n-layout-content>
          </keep-alive>
        </transition>
      </router-view>
      <!-- <n-layout-content class="content">
        <router-view />
      </n-layout-content> -->
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
import type { KeepAliveTab } from '@/types/store/app'

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
      const isMenuItem = this.$_.findLast(matched, (o) => !!o.meta.isMenu)
      if (isMenuItem) {
        return isMenuItem.path
      }
    },

    rmKeepAliveTab(tab: KeepAliveTab, isActive: boolean) {
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
/* route-transform */
.route-transform-leave-active,
.route-transform-enter-active {
  width: 100%;
  position: absolute;
  transition: all 0.3s ease;
}
.route-transform-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.route-transform-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.home {
  height: 100vh;
  padding: 10px;
  background-color: transparent !important;
  .main-layout {
    background-color: transparent !important;
    position: relative;
    .header {
      padding: 5px;
      .topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        .right {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
          margin-left: 20px;
        }
      }
    }
    .content {
      margin-top: 10px;
      .breadcrumb {
        padding: 10px;
      }
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
