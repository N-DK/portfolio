import { parseJSON } from "./index";
import { PublicAxiosInstance } from "./axios-instance";
import { IMSRequestOptions, IAxiosRequestConfig, IBaseResponse } from "./types";
import { AxiosResponse } from "axios";

/**
 *
 * @param url
 * @param parameter
 * @param options
 * @param msOptions
 * node server
 * @returns
 */
// let timeCalled = 0;
export async function request<T = any>(
  url: string,
  parameter: any,
  options: IAxiosRequestConfig = {},
  msOptions: IMSRequestOptions = {},
): Promise<IBaseResponse<T>> {
  const { method = "GET", msFormData = false } = options;
  const { cancelToken } = msOptions;
  const methodIndex = ["PUT", "POST", "PATCH", "DELETE"].indexOf(method);
  const newURL = url;

  const configOptions: IAxiosRequestConfig = {
    url: newURL,
    method,
    cancelToken,
    params: methodIndex < 0 ? parameter : {},
    data: methodIndex >= 0 ? parameter : {},
    ...options,
    headers: options?.headers,
  };
  if (msFormData) {
    const { formData, ...rest } = parameter || {};
    configOptions.params = rest || {};
    configOptions.data = formData || {};
  }

  return new Promise((resolve) => {
    PublicAxiosInstance.request(configOptions).then(
      (response: AxiosResponse) => {
        resolve(parseJSON(response));
      },
      (error: any) => {
        resolve(parseJSON(error.response || {}));
      },
    );
  });
}
