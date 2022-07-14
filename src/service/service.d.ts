import { LoadingCallBack } from '../utils/loading'
import { AxiosRequestConfig } from 'axios'

export interface IAxiosResponseData<D> {
  code: string | number
  message?: string
  body?: D
  file?: Blob
  name?: string
}

export interface IAxiosRequestConfig<P, B> extends AxiosRequestConfig {
  params?: P
  data?: B
  loading?: boolean | string | HTMLElement | undefined
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    loading?: string | HTMLElement | Function | boolean
    loadingCallBack?: LoadingCallBack
    headers?: {
      Authorization?: string
    }
  }
  export interface AxiosResponse {
    loading?: string | HTMLElement | Function | boolean
    loadingCallBack?: LoadingCallBack
  }
}
