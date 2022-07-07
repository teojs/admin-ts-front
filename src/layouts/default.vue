<template>
  <section id="wrapper" class="wrapper">DefaultLayouts</section>
  <router-view />
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
