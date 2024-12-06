"use client";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button } from "@mui/material";

const SCROLL_THRESHOLD = 50;
const ScrollToTop = () => {
  const [hidden, setHidden] = useState<boolean>(true);

  // handle hidden button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Button
      onClick={onClickBtn}
      sx={{
        padding: "16px",
        width: "48px",
        height: "48px",
        borderRadius: "100%",
        minWidth: "unset",
      }}
      className={`${
        hidden ? "hidden" : ""
      } fixed bottom-4 right-5 z-50 bg-gradient-to-r from-pink-500 to-violet-600 hover:text-2xl transition-all duration-200 ease-out`}
    >
      <ArrowUpwardIcon sx={{ fontSize: "1rem" }} />
    </Button>
  );
};

export default ScrollToTop;
