<template>
  <div class="tabs">
    <router-link
      v-for="tab in tabs"
      :key="tab.key"
      :to="(tab.key as string)"
      class="tabs-item"
    >
      <span class="title">{{ tab.label }}</span>
      <span class="icon-close" @click="close(tab)">
        <n-icon>
          <CloseOutlineIcon />
        </n-icon>
      </span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { MenuOption } from 'naive-ui'
import { CloseOutline as CloseOutlineIcon } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    CloseOutlineIcon,
  },
  props: {
    tabs: {
      type: Array as PropType<MenuOption[]>,
      default: () => [],
      requested: true,
    },
  },
  emits: ['onClose'],
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
  methods: {
    close(tab: MenuOption) {
      this.$emit('onClose', tab)
    },
  },
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped>
.tabs {
  --border-radius: 4px;

  height: 40px;
  display: flex;
  margin: 10px;
  background-color: rgba(99, 226, 183, 0.2);
  border-radius: var(--border-radius);
  padding: 5px;
  .tabs-item {
    height: 30px;
    border-radius: var(--border-radius);
    margin-right: 5px;
    transition: 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: var(--bg-light-gray);
    .title {
      padding: 0 10px;
    }
    .icon-close {
      width: 30px;
      height: 30px;
      margin-left: 5px;
      transition: 0.3s;
      padding: 5px;
      border-left: 1px solid var(--bg-gray);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: var(--bg-red);
        color: #ececec;
      }
    }
    &.router-link-active {
      background-color: #63e2b7;
    }
    &:hover {
      background-color: #63e2b7;
    }
  }
}
</style>
