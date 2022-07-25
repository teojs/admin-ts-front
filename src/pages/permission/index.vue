<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component
        :is="Component"
        v-if="route.meta.keepAlive"
        :key="route.name"
      />
    </keep-alive>
    <component :is="Component"
      v-if="!route.meta.keepAlive"
      :key="route.name"
    />
  </router-view>
</template>

<route lang="json">
{
  "meta": {
    "title": "权限管理",
    "sort": 2,
    "isMenu": true
  },
  "redirect": "/permission/role/list"
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  activated() {},
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
