<template>
  <keep-alive-view depth="2" />
</template>

<route lang="json">
{
  "meta": {
    "title": "权限管理",
    "sort": 2,
    "isMenu": true,
    "keepAlive": true
  },
  "redirect": "/permission/role/list"
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Permission',
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
