<template>
  角色列表
  <input type="checkbox" >
  <keep-alive-view />
</template>

<route lang="json">
{
  "meta": {
    "title": "角色管理",
    "sort": 1,
    "isMenu": true
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  data: () => ({
    test: 1231,
  }),
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
