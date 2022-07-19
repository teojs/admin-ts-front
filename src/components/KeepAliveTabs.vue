<template>
  <n-scrollbar x-scrollable>
    <div class="tabs">
      <router-link
        v-for="(tab, i) in tabs"
        :key="tab.key"
        v-slot="{ isActive, navigate }"
        :to="(tab.key as string)"
        custom
      >
        <div class="tabs-item"
          :class="{ active: isActive }"
          @click="navigate"
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
        </div>
      </router-link>
    </div>
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
  --tabs-main-font-active: #ffffff;
  --tabs-item-bg: #000000;
}

.tabs {
  height: 40px;
  display: flex;
  border-radius: var(--tabs-border-radius);
  padding: 5px;
  .tabs-item {
    height: 30px;
    border-radius: var(--tabs-border-radius);
    margin-right: 5px;
    transition: background-color 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 5px 0 10px;
    .title {
      margin-right: 5px;
      transition: color 0.3s;
      white-space: nowrap;
    }
    .close-button {
      transition: 0.3s;
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
    &.active {
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
