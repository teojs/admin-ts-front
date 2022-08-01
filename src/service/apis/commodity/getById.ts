import http from '@/service/axiosConfig'
import { IAxiosResponseData } from '@/service/types/axios'
import type { AxiosRequestConfig } from 'axios'

// 定义请求入参，?号表示可选
interface IRequestConfig extends AxiosRequestConfig {
  params: {
    id: number
  }
}

// 定义返回的数据结构，body里的内容
interface IAxiosResponseDataBody {
  id: number
   brandName: string
   categoryId: number
   commodityCode: string
   commodityName: string
   commodityType: string
   createTime: string
   createdByUser: number
   description: string
   isDeleted: boolean
   isEnabled: boolean
   isMultiSize: boolean
   isVisible: boolean
   marketPrice: number
   model: string
   purchasePrice: number
   updateTime: string
   updatedByUser: number
   updator: string
}

/**
 * 根据id获取商品详情
 *
 * @export
 * @param {IRequestConfig} ctx
 * @return {*}  {Promise<IAxiosResponseData<IAxiosResponseDataBody>>}
 */
export default function api(
  ctx: IRequestConfig
): Promise<IAxiosResponseData<IAxiosResponseDataBody>> {
  return http<IAxiosResponseDataBody>({
    method: 'get',
    url: `/api/pdcgen-demo-management-platform/m-commodity/getById/${ctx.params.id}`,
    ...ctx,
  })
}
