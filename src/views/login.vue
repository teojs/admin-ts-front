<template>
  <section id="wrapper" class="wrapper">
    <label>
      用户名：
      <input v-model="userName" type="text" >
    </label>
    <label>
      密码：
      <input v-model="password" type="text" >
    </label>
    <button @click="submit">提交</button>
  </section>
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
.wrapper {
  padding-top: 70px;
}
</style>
