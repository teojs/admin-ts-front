<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<route lang="json">
{
  "meta": {
    "title": "角色管理",
    "sort": 1
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  data: () => ({
    test: 123,
  }),
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
