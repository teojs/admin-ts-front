<template>
  <n-modal v-model:show="showModal" :auto-focus="false">
    <n-card class="page" title="弹框标题"> 我是弹框 </n-card>
  </n-modal>
</template>

<route lang="json">
{
  "meta": {
    "title": "用户编辑"
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PermissionUserListEdit',
  components: {},
  data() {
    return {
      showModal: false,
    }
  },
  beforeCreate() {},
  activated() {},
  deactivated() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.showModal = true
    console.log(1111)
  },
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
