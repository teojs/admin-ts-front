<template>
  <!-- <router-view /> -->
  <router-view v-slot="{ Component, route }">
    <!-- <transition name="route-transform" mode="out-in"> -->
    <keep-alive>
      <component
        :is="Component"
        v-if="checkAndRecordCaches(route)"
        :key="currentKey"
      />
    </keep-alive>
    <!-- </transition> -->
  </router-view>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'
export default defineComponent({
  name: 'keep-alive-view',
  props: {
    hash: {
      type: String as PropType<string>,
      default: '',
    },
    depth: {
      type: String as PropType<string>,
      default: '',
    },
  },
  data() {
    return {
      caches: ['commodity', 'commodity-commodity', 'commodity-commodity-list', 'permission', 'permission-role', 'permission-role-list', 'permission', 'permission-user', 'permission-user-list'],
      currentMatchedRoutePaths: [] as string[],
      currentKey: '',
    }
  },
  created() {},
  methods: {
    checkAndRecordCaches(route: RouteLocationNormalizedLoaded): boolean {
      const depth = Number(this.depth)
      const nextKey = route.matched[depth].path
      // 初始化
      if (this.currentMatchedRoutePaths.length === 0) {
        this.currentMatchedRoutePaths = route.matched.map((i) => i.path)
        this.currentMatchedRoutePaths.length = depth
        this.currentKey = nextKey
        return true
      }
      // 顶层一直会缓存
      if (depth === 1) {
        this.currentKey = nextKey
        return true
      }
      // 上层切换时，不缓存
      if (this.currentMatchedRoutePaths[depth - 1] !== route.matched[depth - 1].path) return false
      // 当前路由改变且上层不变，缓存
      if (this.currentMatchedRoutePaths[depth] !== route.matched[depth].path) {
        this.currentKey = nextKey
        return true
      }
      console.error('有其他情况导致路由组件被缓存', route)
      this.currentKey = nextKey
      return true
    },
  },
})
</script>

<style lang="less" scoped>
// .route-transform-leave-active,
// .route-transform-enter-active {
//   width: 100%;
//   position: absolute;
//   transition: all 0.3s ease;
// }
// .route-transform-enter-from {
//   opacity: 0;
//   transform: translateY(30px);
// }
// .route-transform-leave-to {
//   opacity: 0;
//   transform: translateY(30px);
// }
</style>
