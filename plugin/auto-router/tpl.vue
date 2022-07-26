<template>
  component name here
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<route lang="json">
{
  "meta": {
    "title": "component name here",
    "sort": 1
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'component name here',
  components: {},
  data() {
    return {}
  },
  beforeCreate() {},
  activated() {},
  deactivated() {},
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
