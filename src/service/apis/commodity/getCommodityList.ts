import http from '@/service/axiosConfig'
import { IAxiosResponseData } from '@/service/types/axios'
import type { AxiosRequestConfig } from 'axios'
import type { SearchCriterias } from '@/types/searcher'
// 定义请求入参，?号表示可选
interface IRequestConfig extends AxiosRequestConfig {
  data: {
    criterias: SearchCriterias
    limit: number
    page: number
  }
}

// 定义返回的数据结构，body里的内容
interface IAxiosResponseDataBody {
  count: number
  currentPageNumber: number
  results: [
    {
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
  ]
}

/**
 * 商品列表
 *
 * @export
 * @param {IRequestConfig} ctx
 * @return {*}  {Promise<IAxiosResponseData<IAxiosResponseDataBody>>}
 */
export default function api(
  ctx: IRequestConfig
): Promise<IAxiosResponseData<IAxiosResponseDataBody>> {
  return http<IAxiosResponseDataBody>({
    method: 'post',
    url: '/api/pdcgen-demo-management-platform/m-commodity/list',
    ...ctx,
  })
}
