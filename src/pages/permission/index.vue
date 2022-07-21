<template>
  <keep-alive-view />
</template>

<route lang="json">
{
  "meta": {
    "title": "权限管理",
    "sort": 2
  },
  "redirect": "/permission/role/list"
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  activated() {
    console.log(2)
  },
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
