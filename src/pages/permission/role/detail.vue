<template>
  <div>
    <input type="text" >
    <input type="checkbox" >
  </div>
</template>

<route lang="json">
{
  "meta": {
    "title": "角色详情",
    "hidden": true,
    "keepAlive": true
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'role-role',
  components: {},
  data: () => ({
    test: 123,
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
