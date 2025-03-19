"use client";
import { toast } from "react-toastify";

export const useNotify = (
  message: string,
  type: "success" | "error" | "info" | "warn" | "default" = "default",
  options = {}
) => {
  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    case "warn":
      toast.warn(message, options);
      break;
    default:
      toast(message, options);
      break;
  }
};
