"use client";
import "../styles/globals.css";
import "../styles/fonts.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./../components/theme/theme";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import { Metadata } from "next";

export const metdata: Metadata = {
  title: "Portal Website by BevisDev - Next.js 14",
  description: "This is Next.js Home developed by BevisDev",
};

type RootlayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootlayoutProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isLoading ? <Loader /> : children}
        </ThemeProvider>
        <ToastContainer autoClose={3000} theme="colored" draggable />
      </body>
    </html>
  );
}
