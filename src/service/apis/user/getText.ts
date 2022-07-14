import http from '@/service/axios.config'
import { IAxiosRequestConfig, IAxiosResponseData } from '@/service/types/axios'

// 定义接口请求的params入参
interface IRequestParams {
  type: number
}

// 定义接口请求的body入参
interface IRequestData {
  userName: string
  cellPhone: string
}

// 定义返回的数据结构，body里的内容
interface IAxiosResponseDataBody {
  userName: string
  cellPhone: string
}

/**
 * ！！！把我这句话改成接口描述！！！
 *
 * @export
 * @param {IAxiosRequestConfig<IRequestParams, IRequestData>} ctx
 * @return {*}  {Promise<IAxiosResponseData<IAxiosResponseDataBody>>}
 */
export default function api(
  ctx: IAxiosRequestConfig<IRequestParams, IRequestData>
): Promise<IAxiosResponseData<IAxiosResponseDataBody>> {
  return http<IAxiosResponseDataBody>({
    method: 'get',
    url: '/api/',
    ...ctx,
  })
}
