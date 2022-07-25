import type { FormItemRule } from 'naive-ui'

export type FormItemType =
  | 'title'
  | 'input'
  | 'inputNumber'
  | 'select'
  | 'date'
  | 'color'
  | 'array'

export interface FormDataModelItem {
  label?: string
  type?: FormItemType
  value?: any
  placeholder?: string
  tips?: string
  disabled?: boolean
  hidden?: boolean
  options?: any[],
  fields?: {
    [x?: string]: FormDataModelItem
  }
  rule?: FormItemRule | FormItemRule[]
  onChange?: <P = any>(payload: P) => void
}

export interface FormDataModel {
  [x: string]: FormDataModelItem
}
