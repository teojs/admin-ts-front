<template>
  <keep-alive-view depth="3" />
</template>

<route lang="json">
{
  "meta": {
    "title": "用户管理",
    "sort": 2,
    "isMenu": true
  },
  "redirect": "/permission/user/list"
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PermissionUser',
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
