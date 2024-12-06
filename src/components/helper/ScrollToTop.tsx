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
        padding: "1rem",
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        minWidth: "2.25rem",
        position: "fixed",
        bottom: "1rem",
        right: "1.25rem",
        display: hidden ? "none" : "flex",
        zIndex: "50",
        color: "#121010",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
      className="bg-gradient-to-r from-[#f9eef4] to-[#bce2ef] hover:text-2xl"
    >
      <ArrowUpwardIcon sx={{ fontSize: "1rem" }} />
    </Button>
  );
};

export default ScrollToTop;
