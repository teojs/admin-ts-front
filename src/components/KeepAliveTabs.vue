<template>
  <n-scrollbar x-scrollable>
    <transition-group name="tab-transform"
      tag="div"
      class="tabs"
    >
      <router-link
        v-for="(tab, i) in tabs"
        :key="tab.key"
        v-slot="{ isActive }"
        :to="(tab.key as string)"
        class="tabs-item"
      >
        <span class="title">
          {{ tab.label }}
        </span>
        <span
          v-if="i !== 0"
          class="close-button"
          @click.prevent.self="close(tab, isActive)"
        >
          <n-icon class="icon-close">
            <CloseOutlineIcon />
          </n-icon>
        </span>
      </router-link>
    </transition-group>
  </n-scrollbar>
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
    close(tab: MenuOption, isActive: boolean) {
      this.$emit('onClose', tab, isActive)
      if (isActive) {
        const length = this.tabs.length
        if (length > 0) {
          this.$router.push(this.tabs[length - 1].key as string)
        }
      }
    },
  },
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped>
.tabs {
  --tabs-border-radius: 4px;
  --tabs-main-bg: #ececec;
  --tabs-main-bg-active: #4dcfa3;
  --tabs-main-font-active: #ffffff;
  --tabs-item-bg: #ececec;
}
[data-theme='dark'] .tabs {
  --tabs-border-radius: 4px;
  --tabs-main-bg: #000000;
  --tabs-main-bg-active: #233633;
  --tabs-main-font-active: #63e2b7;
  --tabs-item-bg: #000000;
}

.tab-transform-enter-from,
.tab-transform-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.tab-transform-leave-active {
  position: absolute;
}

.tabs {
  height: 40px;
  border-radius: var(--tabs-border-radius);
  padding: 5px;
  position: relative;
  white-space: nowrap;
  .tabs-item {
    height: 30px;
    border-radius: var(--tabs-border-radius);
    margin-right: 5px;
    transition: transform, background-color, 0.3s ease;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 0 5px 0 10px;
    flex-wrap: nowrap;
    white-space: nowrap;
    .title {
      margin-right: 5px;
      white-space: nowrap;
    }
    .close-button {
      transition: background-color 0.3s;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      &:hover {
        background-color: var(--bg-red);
        color: #ececec;
      }
      .icon-close {
        pointer-events: none;
      }
    }
    &.router-link-active {
      background-color: var(--tabs-main-bg-active);
      color: var(--tabs-main-font-active);
    }
    &:hover {
      background-color: var(--tabs-main-bg-active);
      color: var(--tabs-main-font-active);
    }
  }
}
</style>
