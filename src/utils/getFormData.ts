import type { FormDataModel } from '@/types/former'

export type GetFormData = (formData: FormDataModel) => void

const getFormData: GetFormData = (formData) => {
  const data: { [x: string]: any } = {}
  for (const key in formData) {
    if (Object.prototype.hasOwnProperty.call(formData, key)) {
      const item = formData[key]
      if (item.type === 'array') {
        data[key] = (item.value as FormDataModel[]).map((o) => {
          return getFormData(o)
        })
      } else {
        data[key] = item.value
      }
    }
  }
  return data
}

export default getFormData
