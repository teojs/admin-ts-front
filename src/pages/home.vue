<template>
  <div class="page">
    <h1>欢迎使用</h1>
    <p>后台管理系统</p>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "title": "首页",
    "sort": 1,
    "isMenu": true,
    "keepAlive": true
  }
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

<style lang="less" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--font-light-gray);
  h1 {
    font-size: 100px;
    margin: 0;
  }
  p {
    font-size: 40px;
  }
}
</style>
