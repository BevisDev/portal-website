"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ToastContainer } from "react-toastify";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import theme from "@/components/theme/theme";

const AppCacheProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer autoClose={3000} theme="colored" draggable />
          {children}
        </ThemeProvider>
      </LocalizationProvider>
    </AppRouterCacheProvider>
  );
};

export default AppCacheProvider;
