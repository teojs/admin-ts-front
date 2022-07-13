<template>
  <section id="wrapper" class="wrapper">新页面</section>
  <router-view />
</template>

<route lang="json">
{
  "meta": {
    "title": "页面标题"
  },
  "dynamic": true
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

<style lang="less" scoped></style>
