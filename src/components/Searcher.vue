<template>
  <div class="searcher">
    <former
      :form-data="searchData"
      :show-label="false"
      :collapsed="gridCollapsed"
      class="former"
    />
    <n-space class="buttons">
      <slot name="right" />
      <n-button type="primary"> 搜索 </n-button>
      <n-button type="warning"> 重置 </n-button>
    </n-space>
  </div>
  <div class="button-collapsed" @click="gridCollapsed = !gridCollapsed">
    <span>{{ gridCollapsed ? '更多筛选' : '收起筛选' }}</span>
  </div>
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
import { defineComponent, PropType } from 'vue'
import type { FormDataModel } from '@/types/former'

export default defineComponent({
  name: 'component name here',
  components: {},
  props: {
    searchData: {
      type: Object as PropType<FormDataModel>,
      default() {
        return {
          name: {
            label: 'ID',
            type: 'input',
            value: '',
            placeholder: '请输入ID进行搜索',
            rule: {
              type: 'string',
              required: true,
            },
          },
        }
      },
    },
  },
  data() {
    return {
      gridCollapsed: true,
    }
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
  methods: {
    getFormDataValues() {
      return 1
    },
  },
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped>
.searcher {
  display: flex;
  position: relative;
  .former {
    flex: 1;
    flex-shrink: 0;
  }
  .buttons {
    justify-content: right !important;
    margin-bottom: 23px;
    margin-left: 10px;
  }
}

.button-collapsed {
  --collapsed-txet-bg: #ffffff;
  --collapsed-line: #f1f1f1;

  display: flex;
  align-items: center;
  line-height: 1;
  cursor: pointer;
  margin-top: -8px;
  position: relative;
  z-index: 2;
  margin-bottom: 10px;

  &::before,
  &::after {
    content: '';
    height: 1px;
    background-color: var(--collapsed-line);
    transition: background-color 0.3s;
  }
  &::before {
    flex: 1;
  }
  &::after {
    width: 20px;
  }
  span {
    right: 20px;
    padding: 0 10px;
    transition: color 0.3s;
    flex-shrink: 0;
    transition: color 0.3s;
  }
  &:hover {
    span {
      color: var(--font-green);
    }
    &::before,
    &::after {
      background-color: var(--font-green);
    }
  }
}
[data-theme='dark'] .button-collapsed {
  --collapsed-txet-bg: #111214;
  --collapsed-line: #292a2c;
}
</style>
