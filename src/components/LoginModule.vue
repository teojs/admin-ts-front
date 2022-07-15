<template>
  <div id="login"
    ref="login"
    class="login"
  >
    <div class="login-form">
      <div class="title">管理系统</div>
      <div v-if="mode === 'scan'" class="qrcode-box">
        <div id="wx-login" />
      </div>
      <div v-if="mode === 'accout'" class="qrcode-box">
        <n-form ref="formRef"
          :model="loginForm"
          :rules="loginFormRules"
        >
          <n-form-item path="username" label="用户名">
            <n-input
              v-model:value="loginForm.username"
              @keydown.enter.prevent
            />
          </n-form-item>
          <n-form-item path="password" label="密码">
            <n-input
              v-model:value="loginForm.password"
              type="password"
              @keydown.enter.prevent
            />
          </n-form-item>
          <n-row :gutter="[0, 24]">
            <n-col :span="24">
              <div style="display: flex; justify-content: flex-end">
                <n-button round
                  type="primary"
                  @click="login"
                > 验证 </n-button>
              </div>
            </n-col>
          </n-row>
        </n-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import WwLogin from '@/utils/wwLogin-1.2.7.js'

export default defineComponent({
  components: {},
  props: {
    mode: {
      type: String as PropType<'scan' | 'accout'>,
      default: 'scan',
    },
  },
  data: () => ({
    wwLogin: null as unknown as WwLogin,
    loginForm: {
      username: '',
      password: '',
    },
    loginFormRules: {},
  }),
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.$nextTick(() => {
      this.wwLogin = new WwLogin({
        id: 'wx-login',
        appid: import.meta.env.VITE_APPID,
        agentid: import.meta.env.VITE_AGENTID,
        redirect_uri:
          import.meta.env.VITE_REDIRECT_HOST +
          import.meta.env.BASE_URL +
          'login',
        state: '',
        href: '',
        lang: 'zh',
      })
    })
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {
    this.wwLogin.destroyed()
  },
  methods: {
    login() {},
  },
  filters: {},
  computed: {},
  watch: {},
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
