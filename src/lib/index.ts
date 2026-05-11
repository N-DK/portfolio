import axios, { AxiosResponse } from "axios";
import type { IBaseResponse } from "./types";

export * from "./request";
export * from "./types";

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
export function parseJSON(
  response: AxiosResponse<any, any>,
): IBaseResponse<any> {
  const { data, status, statusText } = response;

  if (typeof data === "object") {
    return data;
  }
  return { data: null, status: status, success: false, message: statusText };
}

/**
 * Abort HTTP request
 * Use:
 *   import { requestCancel } from '@/lib';
 *
 *   const rc = requestCancel();
 *   const cancelToken = rc.token;
 *
 *   await GetList({ cancelToken, ...payload }) // Add token to request
 *   rc.cancel() //Abort request
 */
export const requestCancel = () => {
  const source = axios.CancelToken.source();
  return {
    cancel: source.cancel,
    token: source.token,
  };
};
