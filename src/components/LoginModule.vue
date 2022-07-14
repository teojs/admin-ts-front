<template>
  <div id="login"
       ref="login"
       class="login">
    <div class="login-form">
      <div class="title">管理系统</div>
      <div class="qrcode-box">
        <div id="wx-login" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WwLogin from '@/utils/wwLogin-1.2.7.js'
import { ref, onUnmounted, nextTick } from 'vue'

defineProps<{
  mode: {
    type: String
  }
 }>()

nextTick(() => {
  const wwLogin = new WwLogin({
    id: 'wx-login',
    appid: import.meta.env.VITE_APPID,
    agentid: import.meta.env.VITE_AGENTID,
    redirect_uri:
      import.meta.env.VITE_REDIRECT_HOST + import.meta.env.BASE_URL + 'login',
    state: '',
    href: '',
    lang: 'zh',
  })
  onUnmounted(() => {
    wwLogin.destroyed()
  })
})
</script>

<style scoped lang="less">
.login {
  height: 100vh;
  background-color: var(--bg-login);
  background-image: url(/bg_login.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    display: block;
    margin: auto;
    font-size: 50px;
    text-align: center;
    color: var(--font-black);
  }
  .login-form {
    background-color: var(--bg-login-form);
    width: 450px;
    border-radius: 4px;
    padding: 30px 60px 40px;
    position: absolute;
    z-index: 2;
    .title {
      font-size: 40px;
      text-align: center;
      padding: 0 0 20px;
      font-weight: bold;
      color: var(--font-black);
    }
    .qrcode-box {
      width: 100%;
      position: relative;
      #wx-login {
        text-align: center;
      }
    }
  }
}
</style>
