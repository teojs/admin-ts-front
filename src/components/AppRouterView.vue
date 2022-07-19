<template>
  <router-view v-slot="{ Component, route }">
    <transition name="route-transform" mode="out-in">
      <!--  TODO: 这里默认缓存所有页面，有空要开发按需缓存 -->
      <keep-alive :key="route.fullPath">
        <div :key="route.fullPath">
          <component :is="Component" :key="route.fullPath" />
        </div>
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped lang="less">
/* route-transform */
.route-transform-leave-active,
.route-transform-enter-active {
  position: absolute !important;
  background-color: white;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  transition: all 0.2s;
}
.route-transform-enter-from {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.2s;
}
.route-transform-leave-to {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.2s;
}
</style>
