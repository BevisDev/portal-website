"use client";
import { Box, Paper } from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import TypographyLabel from "@/routes/HomeRoute";
import ScrollToTop from "../helper/ScrollToTop";
import Footer from "./footer/Footer";
import { Metadata } from "next";
import { memo, useState } from "react";
import { usePathname } from "next/navigation";

export const homeMedata: Metadata = {
  title: "Admin Portal by BevisDev - Next.js 14",
  description: "Welcome to Admin Portal",
};

const sidebarWidth = 250;
const paperWidth = 16;

type HomeLayoutProps = Readonly<{ children: React.ReactNode }>;
const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const [sidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const pathname = usePathname();

  return (
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
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setIsSidebarOpen} />

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
  );
};

export default memo(HomeLayout);
