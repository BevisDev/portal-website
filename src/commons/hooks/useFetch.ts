("use client");

import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { toMilliseconds } from "commons/utils/datetime-utils";
import AppConfig from "@/config/AppConfig";

interface Request {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: Record<string, string>;
  body?: object | string | FormData;
}

interface Response {
  data: any;
  error: HttpError | null;
  isLoading: boolean;
}

interface HttpError {
  code: number;
  message: string;
}

const useGET = ({ url, headers, body }: Request): Response => {
  return useFetch({
    url: url,
    method: "GET",
    headers: headers,
    body: body,
  });
};

const usePOST = ({ url, headers, body }: Request): Response => {
  return useFetch({
    url: url,
    method: "POST",
    headers: headers,
    body: body,
  });
};

const usePUT = ({ url, headers, body }: Request): Response => {
  return useFetch({
    url: url,
    method: "PUT",
    headers: headers,
    body: body,
  });
};

/**
 * React hook to fetch data with Axios.
 *
 * @param {Object} params
 * @param {string} params.url - API endpoint.
 * @param {"GET"|"POST"|"PUT"|"PATCH"|"DELETE"} params.method - HTTP method.
 * @param {Record<string, string>} [params.headers] - Optional headers.
 * @param {object|string|FormData} [params.body] - Request payload.
 *
 * @returns {{
 *   data: any,
 *   error: { code: number, message: string } | null,
 *   isLoading: boolean
 * }} Fetch result.
 */
const useFetch = ({ url, method, headers, body }: Request): Response => {
  const [response, setResponse] = useState<Response>({
    data: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // merge header
        const newHeader =
          body instanceof FormData
            ? { ...headers }
            : { "Content-Type": "application/json", ...headers };

        // build config
        const config: AxiosRequestConfig = {
          url,
          method,
          headers: newHeader,
          data: body,
          timeout: toMilliseconds(AppConfig.apiTimeout, "seconds"),
        };

        const response = await axios(config);

        setResponse({
          data: response.data,
          error: null,
          isLoading: false,
        });
      } catch (error) {
        let iError: HttpError = {
          code: 520,
          message: "Unexpected error",
        };

        // catch error from axios
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          // error timeout
          if (axiosError.code === "ECONNABORTED") {
            iError = {
              code: 408,
              message: axiosError.message,
            };
          } else if (axiosError.response?.data) {
            const serverError = axiosError.response.data as Response;
            if (serverError) {
              setResponse(serverError);
              return;
            } else {
              iError = {
                code: axiosError.response.status,
                message: "No body",
              };
            }
          }
        } else if (error instanceof Error) {
          iError = {
            code: 500,
            message: error.message,
          };
        }
        setResponse({
          data: null,
          error: iError,
          isLoading: false,
        });
      }
    };

    fetchData();
  }, [url, method, headers, body]);

  return response;
};

export default useFetch;
export { useGET, usePOST, usePUT };
