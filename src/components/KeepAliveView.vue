<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component
        :is="Component"
        v-if="route.meta.keepAlive"
        :key="route.path + hash"
      />
    </keep-alive>
    <component
      :is="Component"
      v-if="!route.meta.keepAlive"
      :key="route.path + hash"
    />
  </router-view>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    hash: {
      type: String as PropType<string>,
      default: 'keepaliveview',
    },
  },
})
</script>
