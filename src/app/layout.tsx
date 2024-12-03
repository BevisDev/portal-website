"use client";
import "../styles/globals.css";
import "../styles/fonts.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import theme from "./../components/theme/theme";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { Metadata } from "next";
import Header from "@/components/home/header/Header";
import Footer from "@/components/home/footer/Footer";
import Sidebar from "@/components/home/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import ScrollToTop from "@/components/helper/ScrollToTop";

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

  // handle render SignIn page
  if (pathname === "/signin") {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              component="section"
              sx={{
                backgroundImage: 'url("/images/backgrounds/bg-login.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Container maxWidth="sm">{children}</Container>
            </Box>
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
            {/* <!-- ===== End Sidebar ===== --> */}

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
                <Typography
                  variant="h2"
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  Page Management
                </Typography>
                {children}
              </Box>
            </Paper>
            {/* <!-- ===== End Main ===== --> */}

            {/* <!-- ===== Start ScrollToTop ===== --> */}
            <ScrollToTop />
            {/* <!-- ===== End ScrollToTop ===== --> */}


            {/* <!-- ===== Start Footer ===== --> */}
            <Footer />
            {/* <!-- ===== End Footer ===== --> */}
          </Box>
        </ThemeProvider>
        <ToastContainer autoClose={3000} theme="colored" draggable />
      </body>
    </html>
  );
};

export default RootLayout;
