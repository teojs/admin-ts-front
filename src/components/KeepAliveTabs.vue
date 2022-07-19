<template>
  <div class="tabs">
    <router-link
      v-for="tab in tabs"
      :key="tab.key"
      v-slot="{ isActive, href, navigate }"
      :to="(tab.key as string)"
      custom
    >
      <div class="tabs-item" :class="{ active: isActive }">
        <a v-bind="$attrs"
          :href="href"
          class="title"
          @click="navigate"
        >
          {{ tab.label }}
        </a>
        <span
          v-if="tab.key !== '/index'"
          class="close-button"
          @click="close(tab, isActive)"
        >
          <n-icon class="icon-close">
            <CloseOutlineIcon />
          </n-icon>
        </span>
      </div>
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
  --tabs-main-bg-active: #ffffff;
  --tabs-item-bg: #ececec;
}
[data-theme='dark'] .tabs {
  --tabs-border-radius: 4px;
  --tabs-main-bg: #000000;
  --tabs-main-bg-active: #18181c;
  --tabs-item-bg: #000000;
}

.tabs {
  height: 40px;
  display: flex;
  margin: 10px;
  background-color: var(--tabs-main-bg);
  border-radius: var(--tabs-border-radius);
  padding: 5px;
  .tabs-item {
    height: 30px;
    border-radius: var(--tabs-border-radius);
    margin-right: 5px;
    transition: 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: var(--tabs-item-bg);
    padding: 0 5px 0 10px;
    .title {
      margin-right: 5px;
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
    }
    &:hover {
      background-color: var(--tabs-main-bg-active);
    }
  }
}
</style>