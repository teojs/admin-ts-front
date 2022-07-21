<template>
  <div class="page">
    用户列表
    <router-link to="detail?id=1"> 去详情1 </router-link>
    <router-link to="detail?id=2"> 去详情2 </router-link>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "title": "用户列表",
    "sort": 1,
    "keepAlive": true
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'permission-role-list',
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
