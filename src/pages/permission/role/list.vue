<template>
  <div id="page" class="page">
    <n-data-table
      :columns="mainListColumns"
      remote
      :data="mainListData"
      :pagination="pagination"
      max-height="calc(100vh - 225px)"
      :scroll-x="3000"
      :row-key="(row) => row.id"
      @update:page="onUpdatePage"
      @update:pageSize="onUpdatePageSize"
    />
  </div>
</template>

<route lang="json">
{
  "meta": {
    "title": "角色列表",
    "sort": 1,
    "keepAlive": true
  }
}
</route>

<script lang="ts">
import { defineComponent, h } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NButton } from 'naive-ui'
import listMixin from '@/mixins/list'

interface InternalRowData {
  id: number
  number: string
  name: string
  isHaveFullTime: boolean
  region1: string
  region2: string
  region3: string
  channel1: string
  channel2: string
  channel3: string
  dealerName: string
  createdBy: string
  updatedBy: string
  coopStatus: number
}

export default defineComponent({
  name: 'permission-role-list',
  components: {},
  mixins: [listMixin],
  data() {
    return {
      mainListColumns: [
        {
          type: 'selection',
        },
        {
          title: '门店编码',
          key: 'number',
          width: 150,
        },
        {
          title: '门店名称',
          key: 'name',
          width: 150,
        },
        {
          title: '是否有长促',
          key: 'isHaveFullTime',
          width: 100,
          render: (row) => {
            return row.isHaveFullTime === true ? '是' : '否'
          },
        },
        {
          title: '大区',
          key: 'region1',
          width: 80,
        },
        {
          title: '省区',
          key: 'region2',
          width: 80,
        },
        {
          title: '城市',
          key: 'region3',
          width: 100,
        },
        {
          title: '一级渠道',
          key: 'channel1',
          width: 120,
        },
        {
          title: '二级渠道',
          key: 'channel2',
          width: 120,
        },
        {
          title: '系统',
          key: 'channel3',
          width: 150,
        },
        {
          title: '经销商',
          key: 'dealerName',
          width: 200,
        },
        {
          title: '创建人',
          key: 'createdBy',
          width: 80,
        },
        {
          title: '最后修改人',
          key: 'updatedBy',
          width: 120,
        },
        {
          title: '合作状态',
          key: 'coopStatus',
          width: 200,
          render: (row) => {
            return row.coopStatus === 1 ? '正常' : '停用'
          },
        },
        {
          title: '操作',
          align: 'right',
          fixed: 'right',
          width: 80,
          render: (row) => {
            return [
              h(
                NButton,
                {
                  size: 'small',
                  strong: true,
                  secondary: true,
                  onClick: () => {
                    this.$router.push({
                      path: 'edit',
                      query: { id: row.id },
                    })
                  },
                },
                {
                  default: () => '编辑',
                }
              ),
            ]
          },
        },
      ] as DataTableColumns<InternalRowData>,
      mainListData: [] as InternalRowData[],
    }
  },
  activated() {},
  deactivated() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.getMainList()
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    getMainList(page?: number) {
      this.$api.test
        .getMainList({
          loading: '#page',
        })
        .then((res) => {
          this.mainListData = res.body?.list || []
          this.pagination.itemCount = res.body?.total || 0
        })
    },
  },
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped></style>
