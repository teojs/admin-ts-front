<template>
  <n-config-provider
    abstract
    :theme="theme"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <n-dialog-provider>
      <n-message-provider>
        <n-loading-bar-provider>
          <router-view />
        </n-loading-bar-provider>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import { mapState } from 'vuex'

interface AppData {
  darkTheme: typeof darkTheme
  zhCN: typeof zhCN
  dateZhCN: typeof dateZhCN
  theme: typeof darkTheme | null
}

export default defineComponent({
  components: {},
  data() {
    return {
      darkTheme,
      zhCN,
      dateZhCN,
      theme: null,
    } as AppData
  },
  beforeCreate() {},
  created() {
    this.detectColorScheme()
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    detectColorScheme() {
      let colorScheme = localStorage.getItem('colorScheme')
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      if (colorScheme) {
        colorScheme === 'light'
          ? (this.theme = null)
          : (this.theme = darkTheme)
      } else if (mediaQuery.matches) {
        colorScheme = 'dark'
        this.theme = darkTheme
      }
      this.$store.commit('switchTheme', colorScheme)
    },
  },
  computed: {
    ...mapState(['colorScheme']),
  },
  watch: {},
})
</script>

<style></style>
