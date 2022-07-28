<template>
  <keep-alive-view hash="permission-role" />
</template>

<route lang="json">
{
  "meta": {
    "title": "角色管理",
    "sort": 1,
    "isMenu": true,
    "keepAlive": true
  },
  "redirect": "/permission/role/list"
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'permission-role',
  components: {},
  data: () => ({}),
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
