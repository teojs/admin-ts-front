export type PaginationProps = {
  page: number
  itemCount: number
  pageSize: number
  showSizePicker: true
  pageSizes: number[]
  showQuickJumpers: true
  prefix(payload: { itemCount: number }): string
  onChange(page: number)
  onUpdatePageSize(pageSize: number)
}
