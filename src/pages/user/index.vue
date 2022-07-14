<template>
  <page-panel>
    <template #title>user/index.vue</template>
    <template #content>
      user/index 页面
      <router-view />
    </template>
  </page-panel>
</template>

<route lang="json">
{
  "meta": {
    "title": "页面标题"
  },
  "dynamic": true
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped></style>
