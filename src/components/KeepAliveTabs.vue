<template>
  <n-scrollbar x-scrollable>
    <transition-group name="tab-transform"
      tag="div"
      class="tabs"
    >
      <router-link
        v-for="(tab, i) in tabs"
        :key="tab.fullPath"
        v-slot="{ isActive }"
        :to="(tab.fullPath as string)"
        class="tabs-item"
      >
        <span class="title">
          {{ tab.title }}
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
import { CloseOutline as CloseOutlineIcon } from '@vicons/ionicons5'
import type { KeepAliveTab } from '@/types/store/app'

export default defineComponent({
  components: {
    CloseOutlineIcon,
  },
  props: {
    tabs: {
      type: Array as PropType<KeepAliveTab[]>,
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
    close(tab: KeepAliveTab, isActive: boolean) {
      this.$emit('onClose', tab, isActive)
      if (isActive) {
        const length = this.tabs.length
        if (length > 0) {
          this.$router.push(this.tabs[length - 1].path as string)
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
  --tabs-border-radius: 99px;
  --tabs-main-bg: #f3f3f3;
  --tabs-main-bg-active: #4dcfa3;
  --tabs-main-font-active: #ffffff;
  --tabs-item-bg: #ececec;
}
[data-theme='dark'] .tabs {
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
  height: 30px;
  border-radius: var(--tabs-border-radius);
  position: relative;
  white-space: nowrap;
  background-color: var(--tabs-main-bg);
  .tabs-item {
    height: 30px;
    border-radius: var(--tabs-border-radius);
    margin-right: 2px;
    transition: transform, background-color, 0.3s ease;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 0 10px 0 15px;
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
