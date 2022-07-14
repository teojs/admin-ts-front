<template>
  <section id="wrapper" class="wrapper">
    <page-panel>
      <template #title>default.vue</template>
      <template #content>
        默认的布局页面
        <router-view />
      </template>
    </page-panel>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayouts',
  components: {},
  data: () => ({}),
})
</script>

<style lang="less" scoped>
.wrapper {
  padding-top: 70px;
}
</style>
