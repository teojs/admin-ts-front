<template>
  <router-view v-slot="{ Component, route }">
    <transition name="route-transform" mode="out-in">
      <keep-alive>
        <component :is="Component" :key="route.fullPath"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped lang="less">
/* route-transform */
.route-transform-leave-active,
.route-transform-enter-active {
  position: absolute !important;
  transition: all 0.2s;
}
.route-transform-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.route-transform-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
