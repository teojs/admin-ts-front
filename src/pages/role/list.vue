<template>
  <div>
    角色列表1
    <input type="checkbox" >
    <n-button @click="$router.push('detail')"> 弹框 </n-button>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "title": "角色列表",
    "sort": 1
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  data: () => ({
    user: 1,
  }),
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    showMessage() {
      this.$message.info('123')
    },
  },
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped></style>
