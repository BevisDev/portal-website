"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
// import styles (css)
import "@/styles/reset.css";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/components/theme/theme";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const rootMedata: Metadata = {
  title: "Portal Website by BevisDev - Next.js 14",
  description: "Welcome to Portal Website",
};

type RootlayoutProps = Readonly<{ children: React.ReactNode }>;
const RootLayout: React.FC<RootlayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ToastContainer autoClose={3000} theme="colored" draggable />
              {children}
            </ThemeProvider>
          </LocalizationProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
