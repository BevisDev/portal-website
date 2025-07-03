"use client";

import { Box, Paper } from "@mui/material";
import TypographyLabel from "./components/data/HomeRoute";
import { memo, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AppConfig from "@/config/AppConfig";

type AdminLayoutProps = Readonly<{ children: React.ReactNode }>;
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
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
        backgroundColor: "#fdf1f5",
      }}
    >
      {/* <!-- ===== Start Sidebar ===== --> */}
      <Sidebar
        sidebarWidth={AppConfig.sidebarWidth}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setIsSidebarOpen}
      />

      <Paper
        elevation={3}
        style={{
          margin: `${AppConfig.marginPaper}px`,
          flex: 1,
          borderRadius: "8px",
          marginLeft: sidebarOpen
            ? `${AppConfig.sidebarWidth + AppConfig.marginPaper}px`
            : `${AppConfig.marginPaper}px`,
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

export default memo(AdminLayout);
