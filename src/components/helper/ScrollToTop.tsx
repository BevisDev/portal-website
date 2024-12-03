"use client";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from "@mui/material";

const btnClassName = "hidden fixed bottom-4 right-5 z-50 bg-gradient-to-r from-pink-500 to-violet-600 hover:text-2xl transition-all duration-200 ease-out ";
const SCROLL_THRESHOLD = 50;
const ScrollToTop = () => {
    const [btnStyled, setBtnStyled] = useState(btnClassName);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > SCROLL_THRESHOLD) {
                setBtnStyled(btnClassName.replace("hidden", ""));
            } else {
                setBtnStyled(btnClassName + "hidden");
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
            className={btnStyled}
        >
            <ArrowUpwardIcon sx={{ fontSize: "1rem" }} />
        </Button>)
}

export default ScrollToTop;