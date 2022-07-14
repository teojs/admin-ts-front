<template>
  <div id="login">
    <login-module />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'login-view',
  components: {},
  data: () => ({
    meta: {
      title: '登录页面',
    },
    userName: '',
    password: '',
  }),
  methods: {
    submit() {
      this.$data.meta.title = this.userName
      this.$store.commit('login', {
        userName: this.userName,
        password: this.password,
      })
    },
  },
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
