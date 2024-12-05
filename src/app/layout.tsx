"use client";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/font.css";
import "@/styles/globals.css"
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Paper } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { Metadata } from "next";
import theme from "@/components/theme/theme";
import Header from "@/components/home/header/Header";
import Footer from "@/components/home/footer/Footer";
import Sidebar from "@/components/home/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import ScrollToTop from "@/components/helper/ScrollToTop";
import { RouteLayout } from "@/routes/RouteLayout";
import TypographyLabel from "@/routes/Menu";

export const homeMedata: Metadata = {
  title: "Portal Website by BevisDev - Next.js 14",
  description: "Welcome to my Portal Website",
};

type RootlayoutProps = Readonly<{ children: React.ReactNode }>;
const sidebarWidth = 250;
const paperWidth = 16;

const RootLayout: React.FC<RootlayoutProps> = ({ children }) => {
  const [sidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const pathname = usePathname();

  // handle render routers have layout
  if (RouteLayout.includes(pathname)) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box component="main">{children}</Box>
          </ThemeProvider>
        </body>
      </html>
    );
  }

  // handle render children page
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer autoClose={3000} theme="colored" draggable />
          <Box
            component="section"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "100vh",
            }}
          >
            {/* <!-- ===== Start Sidebar ===== --> */}
            <Sidebar
              sidebarWidth={sidebarWidth}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setIsSidebarOpen}
            />

            <Paper
              elevation={3}
              style={{
                margin: `${paperWidth}px`,
                flex: 1,
                borderRadius: "12px",
                marginLeft: sidebarOpen
                  ? `${sidebarWidth + 12}px`
                  : `${paperWidth}px`,
                transition: "width 0.3s, margin-left 0.3s ease",
              }}
            >
              {/* <!-- ===== Header ===== --> */}
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setIsSidebarOpen}
              />

              {/* <!-- ===== Main ===== --> */}
              <Box
                component="main"
                sx={{
                  padding: "2rem 3rem",
                }}
              >
                <TypographyLabel pathname={pathname} />
                {children}
              </Box>
            </Paper>

            {/* <!-- ===== ScrollToTop ===== --> */}
            <ScrollToTop />

            {/* <!-- ===== Footer ===== --> */}
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
