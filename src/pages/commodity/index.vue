<template>
  <keep-alive-view depth="2" />
</template>

<route lang="json">
{
  "meta": {
    "title": "商品管理",
    "sort": 3,
    "isMenu": true,
    "keepAlive": true
  },
  "redirect": "/commodity/commodity/list"
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Commodity',
  components: {},
  activated() {},
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
