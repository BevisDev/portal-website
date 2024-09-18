"use client";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./../components/theme/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type RootlayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootlayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        <ToastContainer autoClose={3000} theme="colored" draggable />
      </body>
    </html>
  );
}
