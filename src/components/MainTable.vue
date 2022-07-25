<template>
  <n-data-table
    remote
    :columns="columns"
    :data="data"
    :pagination="pagination"
    max-height="maxHeight"
    :scroll-x="scrollX"
    :row-key="(row) => row.id"
    @update:page="onUpdatePage"
    @update:pageSize="onUpdatePageSize"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { DataTableColumns, PaginationProps } from 'naive-ui'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
    columns: {
      type: Array as PropType<DataTableColumns>,
      required: true,
    },
    pagination: {
      type: Object as PropType<PaginationProps>,
      default() {
        return {
          page: 1,
          itemCount: 0,
          pageSize: 20,
          showSizePicker: true,
          pageSizes: [20, 50, 100],
          showQuickJumpers: true,
          prefix({ itemCount }) {
            return `总共 ${itemCount} 条数据`
          },
        } as PaginationProps
      },
    },
    scrollX: {
      type: [Number, String],
      default: 'auto',
    },
    maxHeight: {
      type: [Number, String],
      default: 'calc(100vh - 225px)',
    },
  },

  emits: {
    'update:page': (page: number) => true,
    'update:pageSize': (pageSize: number) => true,
  },

  setup(props, context) {
    const onUpdatePage = (page: number) => {
      context.emit('update:page', page)
    }
    const onUpdatePageSize = (pageSize: number) => {
      context.emit('update:pageSize', pageSize)
    }
    return {
      onUpdatePage,
      onUpdatePageSize,
    }
  },
})
</script>
