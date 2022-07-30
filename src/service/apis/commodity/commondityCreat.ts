import http from '@/service/axiosConfig'
import { IAxiosResponseData } from '@/service/types/axios'
import type { AxiosRequestConfig } from 'axios'

// 定义请求入参，?号表示可选
interface IRequestConfig extends AxiosRequestConfig {
  data: {
    brandName: string
    categoryId: number
    commodityName: string
    commodityCode: string
    commodityType: string
    description: string
    isDeleted: boolean
    isEnabled: boolean
    isMultiSize: boolean
    isVisible: boolean
    marketPrice: number
    model: string
    purchasePrice: number
  }
}

// 定义返回的数据结构，body里的内容
interface IAxiosResponseDataBody {}

/**
 * 新建商品
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
    url: '/api/pdcgen-demo-management-platform/m-commodity/create',
    ...ctx,
  })
}
