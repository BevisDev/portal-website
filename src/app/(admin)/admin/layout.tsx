"use client";

import { Box, Paper } from "@mui/material";
import TypographyLabel from "./components/data/HomeRoute";
import { memo, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StoreProvider from "@/app/lib/redux/provider/StoreProvider";
import AppCacheProvider from "@/app/lib/material-ui/provider/AppProvider";

const sidebarWidth = 250;
const paperWidth = 16;

type AdminLayoutProps = Readonly<{ children: React.ReactNode }>;
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const pathname = usePathname();

  return (
    <StoreProvider>
      <AppCacheProvider>
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
                ? `${sidebarWidth + 15}px`
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
      </AppCacheProvider>
    </StoreProvider>
  );
};

export default memo(AdminLayout);
