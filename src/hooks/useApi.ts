/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { toMilliseconds } from "@/utils/DateTimeUtils";

interface ApiRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
}

interface ErrorProps {
  errorCode: string;
  errorMessage: string;
}

interface ApiResponse {
  data: any;
  error: ErrorProps | null;
  loading: boolean;
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
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let timeout = toMilliseconds(3, "seconds");

        const savedConfig = sessionStorage.getItem("signin-config");
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

        if (url == "signin-config") {
          sessionStorage.setItem(
            "signin-config",
            JSON.stringify(response.data)
          );
        }

        setResponse({
          data: response.data,
          error: null,
          loading: false,
        });
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          if (axios.isCancel(error)) {
            setResponse({
              data: null,
              error: "Request canceled",
              loading: false,
            });
          } else if (error.code === "ECONNABORTED") {
            // Lỗi timeout
            setResponse({
              data: null,
              error: "Request timed out",
              loading: false,
            });
          }
        }
        setResponse({
          data: null,
          error:
            error instanceof Error
              ? error.message
              : console.error("Unexpected error occurred"),
          loading: false,
        });
      }
    };

    fetchData();
  }, [url, method, headers, body]);

  return response;
};
