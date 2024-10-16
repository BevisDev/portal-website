"use client";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React from "react";

const DEFAULT_BTN_CLS =
  "fixed bottom-4 right-4 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-2xl transition-all duration-200 ease-out";
const SCROLL_THRESHOLD = 50;

export default function ScrollToTop() {
  const [btnCls, setBtnCls] = React.useState(DEFAULT_BTN_CLS);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  return (
    <button className={btnCls}>
      <ArrowUpwardIcon className="text-white" />
    </button>
  );
}
