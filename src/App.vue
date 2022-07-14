<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  data() {
    return {}
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  async mounted() {
    const res = await this.$api.getUserInfo({
      params: {
        userName: '1',
        cellPhone: '1',
      },
      loading: '#page',
    })
    console.log(res)
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
  computed: {},
  watch: {},
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
