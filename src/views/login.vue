<template>
  <div id="login">
    <login-module mode="account" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'login-view',
  components: {},
  data: () => ({}),
  methods: {},
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
