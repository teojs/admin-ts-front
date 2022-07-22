import type { FormItemRule } from 'naive-ui'

export type FormItemType =
  | 'title'
  | 'input'
  | 'inputNumber'
  | 'select'
  | 'date'
  | 'color'
  | 'array'

export interface FormDataModelItem<F> {
  label?: string
  type: FormItemType
  value: any
  placeholder?: string
  tips?: string
  disabled?: boolean
  hidden?: boolean
  fields?: F
  rule?: FormItemRule | FormItemRule[]
  onChange?: <P = any>(payload: P) => void
}

export interface FormDataModel {
  [x: string]: FormDataModelItem<FormDataModel>
}
