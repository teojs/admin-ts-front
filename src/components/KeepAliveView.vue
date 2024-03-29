<template>
  <!-- <router-view /> -->
  <router-view v-slot="{ Component, route }">
    <!-- <transition name="route-transform" mode="out-in"> -->
    <keep-alive :include="caches">
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
import type { RouteLocationNormalizedLoaded } from 'vue-router'
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
      currentMatchedRoutePaths: [] as string[],
      currentKey: '',
    }
  },
  created() {},
  methods: {
    checkAndRecordCaches(route: RouteLocationNormalizedLoaded): boolean {
      const paths = route.matched.map((i) => i.path)
      const depth = Number(this.depth)
      paths.length = depth
      // 底层路由根据传参不同缓存多个
      const nextKey = route.path === route.matched[depth]?.path ? route.fullPath : route.matched[depth]?.path
      // 上层或当前路由不存在时，退出
      if (!nextKey) return false
      if (route.matched[depth - 1] === undefined) return false
      // 初始化或顶层路由，缓存
      if (this.currentMatchedRoutePaths.length === 0) {
        this.currentMatchedRoutePaths = paths
        this.currentKey = nextKey
        return true
      }
      if (depth === 1) {
        // this.currentMatchedRoutePaths = paths
        this.currentKey = nextKey
        return true
      }
      // 上层切换时，不缓存
      if (this.currentMatchedRoutePaths[depth - 1] !== route.matched[depth - 1].path) return false
      // 上层不变，当前路由改变，缓存
      if (this.currentMatchedRoutePaths[depth] !== route.matched[depth].path) {
        // this.currentMatchedRoutePaths = paths
        this.currentKey = nextKey
        return true
      }
      console.error('有其他情况导致路由组件被缓存', route)
      // this.currentMatchedRoutePaths = paths
      this.currentKey = nextKey
      return true
    },
  },
  computed: {
    caches() {
      return this.$store.getters['app/caches']
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
