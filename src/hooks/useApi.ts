"use client";

import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { toMilliseconds } from "@/utils/datetime-utils";

interface ApiRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
}

interface ErrorProps {
  code: number;
  message: string;
}

interface ApiResponse {
  data: any;
  error: ErrorProps | null;
  isLoading: boolean;
}

export const useApi = ({
  url,
  method,
  headers,
  body,
}: ApiRequest): ApiResponse => {
  const [response, setResponse] = useState<ApiResponse>({
    data: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let timeout = toMilliseconds(3, "seconds");

        const savedConfig = localStorage.getItem("signin-config");
        if (savedConfig) {
          const signinConfigObj = JSON.parse(savedConfig);
          timeout = toMilliseconds(signinConfigObj.timeoutSeconds, "seconds");
        }

        const config: AxiosRequestConfig = {
          baseURL: process.env.NEXT_PUBLIC_GATEWAY_URL,
          url,
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          data: body,
          timeout: timeout,
        };

        const response = await axios(config);

        if (url === "/signin-config") {
          localStorage.setItem("signin-config", JSON.stringify(response.data));
        }

        setResponse({
          data: response.data,
          error: null,
          isLoading: false,
        });
      } catch (error) {
        let iError: ErrorProps = {
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
            const serverError = axiosError.response.data as ApiResponse;
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
