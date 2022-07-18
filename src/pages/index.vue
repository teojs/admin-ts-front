<template>
  <page-panel>
    <template #title>index.vue</template>
    <template #content>index 页面</template>
  </page-panel>
</template>

<route lang="json">
{
  "meta": {
    "title": "首页",
    "sort": 1
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
