<template>
  <div id="page" class="page">
    <searcher ref="searcher"
      :search-data="searchData"
      @onSearch="onSearch"
    />

    <option-bar>
      <template #left>
        <n-space>
          <router-link to="edit">
            <n-button type="primary" size="small"> 添加 </n-button>
          </router-link>
        </n-space>
      </template>
      <!-- <template #right>
        <n-button size="small"> 自定义列 </n-button>
      </template> -->
    </option-bar>

    <n-data-table
      :columns="mainListColumns"
      remote
      :data="mainListData"
      :pagination="pagination"
      max-height="calc(100vh - 335px)"
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
    "title": "商品列表",
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
import type { FormDataModel } from '@/types/former'
import type { SearchCriterias } from '@/types/searcher'

interface InternalRowData {
  brandName: string
  categoryId: number
  commodityCode: string
  commodityName: string
  commodityType: 'VIRTUAL' | 'POINT' | 'REAL'
  createTime: Date
  createdByUser: number
  creator: string
  description: string
  id: number
  isDeleted: boolean
  isEnabled: boolean
  isMultiSize: boolean
  isVisible: boolean
  marketPrice: number
  model: string
  purchasePrice: number
  updateTime: Date
  updatedByUser: number
  updator: string
}

export default defineComponent({
  name: 'CommodityCommodityList',
  components: {},
  mixins: [listMixin],
  data() {
    return {
      mainListColumns: [] as DataTableColumns<InternalRowData>,
      mainListData: [] as InternalRowData[],
      searchData: {
        id: {
          type: 'numberRange',
          clearable: true,
          value: null,
          startPlaceholder: '起始ID',
          endPlaceholder: '结束ID',
        },
        brandName: {
          type: 'input',
          placeholder: '请输入品牌名称进行搜索',
          clearable: true,
          value: null,
        },
        commodityCode: {
          type: 'inputNumber',
          placeholder: '请输入商品编码进行搜索',
          clearable: true,
          value: null,
        },
        commodityName: {
          type: 'input',
          placeholder: '请输入商品名称进行搜索',
          clearable: true,
          value: null,
        },
        commodityType: {
          type: 'select',
          placeholder: '商品类型',
          clearable: true,
          value: null,
          options: [
            {
              label: '虚拟物品',
              value: 'VIRTUAL',
            },
            {
              label: '积分',
              value: 'POINT',
            },
            {
              label: '实物',
              value: 'REAL',
            },
          ],
        },
        createTime: {
          type: 'date',
          dateType: 'daterange',
          value: null,
          startPlaceholder: '创建开始时间',
          endPlaceholder: '创建结束时间',
          clearable: true,
        },
      } as FormDataModel,
      commodityTypeMap: {
        VIRTUAL: '虚拟物品',
        POINT: '积分',
        REAL: '实物',
      },
    }
  },
  deactivated() {},
  beforeCreate() {},
  created() {
    this.mainListColumns = [
      {
        type: 'selection',
      },
      {
        title: 'ID',
        key: 'id',
        width: 150,
      },
      {
        title: '品牌名称',
        key: 'brandName',
        width: 150,
      },
      {
        title: '分类ID',
        key: 'categoryId',
        width: 150,
      },
      {
        title: '商品编码',
        key: 'commodityCode',
        width: 80,
      },
      {
        title: '商品名称',
        key: 'commodityName',
        width: 80,
      },
      {
        title: '商品类型',
        key: 'commodityType',
        width: 100,
        render: (row) => {
          return this.commodityTypeMap[row.commodityType]
        },
      },
      {
        title: '行记录创建时间',
        key: 'createTime',
        width: 150,
        render: (row) => {
          return this.$formatDate(row.createTime, 'YYYY-MM-DD HH:mm:ss')
        },
      },
      {
        title: '行记录创用户',
        key: 'createdByUser',
        width: 120,
      },
      {
        title: '商品描述',
        key: 'description',
        width: 150,
      },
      {
        title: '是否已删除',
        key: 'isDeleted',
        width: 200,
        render: (row) => {
          return row.isDeleted ? '是' : '否'
        },
      },
      {
        title: '是否启用',
        key: 'isEnabled',
        width: 80,
        render: (row) => {
          return row.isEnabled ? '是' : '否'
        },
      },
      {
        title: '是否多规格商品',
        key: 'isMultiSize',
        width: 150,
        render: (row) => {
          return row.isMultiSize ? '是' : '否'
        },
      },
      {
        title: '市场价',
        key: 'marketPrice',
        width: 120,
      },
      {
        title: '商品型号',
        key: 'model',
        width: 120,
      },
      {
        title: '进货价',
        key: 'purchasePrice',
        width: 120,
      },
      {
        title: '上下架',
        key: 'isVisible',
        width: 200,
        render: (row) => {
          return row.isVisible ? '上架' : '下架'
        },
      },
      {
        title: '行记录更新时间',
        key: 'updateTime',
        render: (row) => {
          return this.$formatDate(row.updateTime, 'YYYY-MM-DD HH:mm:ss')
        },
      },
      {
        title: '行记录更用户',
        key: 'updatedByUser',
      },
      {
        title: '数据更新系统',
        key: 'updator',
      },
      {
        title: '操作',
        key: '',
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
    ]
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    getMainList(criterias?: SearchCriterias) {
      this.$api.commodity
        .getCommodityList({
          data: {
            criterias: criterias || [],
            limit: this.pagination.pageSize,
            page: this.pagination.page,
          },
          loading: '#page',
        })
        .then((res) => {
          this.mainListData = res.body?.results || []
          this.pagination.itemCount = res.body?.count || 0
        })
    },
    onSearch(criterias: SearchCriterias) {
      if (criterias) {
        this.getMainList(criterias)
      }
    },
  },
  filters: {},
  computed: {},
  watch: {},
})
</script>

<style lang="less" scoped></style>
