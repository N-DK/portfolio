import { CancelToken, AxiosRequestConfig } from 'axios';

export interface IBaseResponse<T = any> {
  data: T | null;
  status: number;
  success: boolean;
  message: string;
  headers?: Record<string, string>;
}

export interface IMSRequestOptions {
  cancelToken?: CancelToken;
}

type methodType = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';
export interface IAxiosRequestConfig extends Omit<AxiosRequestConfig<any>, 'headers'> {
  method?: methodType;
  msFormData?: boolean;
  headers?: AxiosRequestConfig['headers'];
}
