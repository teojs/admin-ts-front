import http from '@/service/axiosConfig'
import { IAxiosResponseData } from '@/service/types/axios'
import type { AxiosRequestConfig } from 'axios'

// 定义请求入参，?号表示可选
interface IRequestConfig extends AxiosRequestConfig {
  params?: {
    test: number
  }
  data?: {
    test: string
  }
}

// 定义返回的数据结构，body里的内容
interface IAxiosResponseDataBody {
  list: {
    id: number
    number: string
    name: string
    isHaveFullTime: boolean
    region1: string
    region2: string
    region3: string
    channel1: string
    channel2: string
    channel3: string
    dealerName: string
    createdBy: string
    updatedBy: string
    coopStatus: number
  }[]
  page: number
  total: number
}

/**
 * ！！！把我这句话改成接口描述！！！
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
    url: '/api/getMainList',
    ...ctx,
  })
}
