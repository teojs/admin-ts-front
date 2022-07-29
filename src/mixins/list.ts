import { defineComponent } from 'vue'
import type { PaginationProps } from 'naive-ui'

// 因为这些属性是readonly，所以用extend方式来扩展
interface IPaginationProps extends PaginationProps {
  page: number
  pageSize: number
  itemCount: number
}

export default defineComponent({
  data: () => ({
    pagination: {
      page: 1,
      itemCount: 0,
      pageSize: 20,
      showSizePicker: true,
      pageSizes: [20, 50, 100],
      showQuickJumpers: true,
      prefix({ itemCount }) {
        return `总共 ${itemCount} 条数据`
      },
    } as IPaginationProps,
  }),
  created() {},
  activated() {},
  mounted() {
    this.getMainList()
  },
  methods: {
    onUpdatePage(page: number) {
      this.pagination.page = page
      this.getMainList()
    },
    onUpdatePageSize(pageSize: number) {
      this.pagination.page = 1
      this.pagination.pageSize = pageSize
      this.getMainList()
    },
    getMainList() {},
  },
})
