import type { FormItemRule } from 'naive-ui'

export type FormItemType =
  // 分类标题，不进行控件渲染
  | 'title'
  // 手动输入框
  | 'input'
  // 数字输入框，区别于input，
  // 这个只能是number类型，且会有加减按钮
  | 'inputNumber'
  // 区域文本器
  | 'textarea'
  // 选择器
  | 'select'
  // 级联选择器
  | 'cascader'
  // 单个日期选择器
  | 'date'
  // 日期范围选择器
  | 'daterange'
  // 颜色选择器
  | 'color'
  // 数组，会自动生成可新增和删除的数组表单
  | 'array'
  // 单选
  | 'radio'
  // 开关
  | 'switch'
  // 图片
  | 'image'
  // 标签
  | 'tag'
  // 单纯显示一句提示语这样
  | 'tips'

export type DateType =
  | 'date'
  | 'datetime'
  | 'daterange'
  | 'datetimerange'
  | 'month'
  | 'monthrange'
  | 'year'
  | 'quarter'

export type TagType =
  | 'default'
  | 'error'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'

export interface FormDataModelItem {
  // 控件标题
  label?: string
  // 控件类型，看 FormItemType
  type?: FormItemType
  // 日期选择器类型
  dateType?: DateType
  // 控件的初始值
  value?: any | FormDataModelItem[]
  // 控件的placeholder
  placeholder?: string
  // 会在控件标题旁生成额外的提示
  tips?: string
  // 是否禁用
  disabled?: boolean
  // 是否隐藏
  hidden?: boolean
  // 如果type=select|，则需要这个下拉列表
  options?: any[]
  // select是否支持多选
  multiple?: boolean
  // select是否支持过滤
  filterable?: boolean
  // 多选时最多显示几个值
  maxTagCount?: number

  // 如果type=cascader，可以设置options列表的字段，see：https://www.naiveui.com/zh-CN/light/components/cascader
  valueField?: string
  labelField?: string
  childField?: string
  checkStrategy?: 'all' | 'child' | 'parent'
  // 如果type=array，则需要设置array下对应的object的字段
  fields?: {
    [x?: string]: FormDataModelItem
  }
  // 表单规则，see：https://www.naiveui.com/zh-CN/light/components/form#API
  rule?: FormItemRule | FormItemRule[]
  // 控件值发生改变时触发
  onChange?: <P = any>(payload: P) => void

  // 一些修饰
  // input/inputNumber
  prefix?: string
  suffix?: string

  // 标签类型
  tagType?: TagType

  // 颜色控件的modes
  colorType?: ('rgb' | 'hsl' | 'hsv' | 'hex')[]

  // dateType=daterange时需要
  startPlaceholder?: string
  endPlaceholder?: string

  // 禁用可选日期
  isDateDisabled?: (
    current: number,
    phase: 'start' | 'end',
    value: [number, number] | null
  ) => boolean
}

export interface FormDataModel {
  [x: string]: FormDataModelItem
}

export interface FormerMethods {
  validForm: <D = any>(cb: (data: D) => void) => void
}
