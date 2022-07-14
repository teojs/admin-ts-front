<template>
  <div class="page-panel">
    <div class="title"><slot name="title" /></div>
    <div class="content"><slot name="content" /></div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
  filters: {},
  computed: {},
  watch: {},
}
</script>

<style scoped lang="less">
.page-panel {
  display: inline-block;
  border: 1px solid #ccc;
  .title {
    border-bottom: 1px solid #ccc;
    padding: 5px;
  }
  .content {
    padding: 20px;
  }
}
</style>
