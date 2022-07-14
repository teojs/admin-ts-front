import http from '../axios.config'
import { IAxiosRequestConfig, IAxiosResponseData } from '../service'

// 定义接口请求的params入参
interface IRequestParams {
  userName: string
  cellPhone: string
}

// 定义接口请求的body入参
interface IRequestData {
  userName: string
  cellPhone: string
}

// 定义返回的数据
interface IAxiosResponseDataBody {
  userName: string
  cellPhone: string
}

export default function api(
  ctx: IAxiosRequestConfig<IRequestParams, IRequestData>
): Promise<IAxiosResponseData<IAxiosResponseDataBody>> {
  return http<IAxiosResponseDataBody>({
    method: 'get',
    url: 'http://api.teojs.com/wethear',
    ...ctx,
  })
}
