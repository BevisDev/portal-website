"use client";
import Footer from "@/components/home/footer/Footer";
import Header from "@/components/home/header/Header";
import Sidebar from "@/components/home/sidebar/Sidebar";
import { Box } from "@mui/material";
import { useState } from "react";

type HomeProps = Readonly<{ children: React.ReactNode }>;
const sidebarWidth = 240;

export default function Home({ children }: HomeProps) {
  const [sidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <Box component="section">
      {/* <!-- ===== Header ===== --> */}
      <Header
        sidebarWidth={sidebarWidth}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setIsSidebarOpen}
      />

      {/* <!-- ===== Sidebar ===== --> */}
      <Sidebar
        sidebarWidth={sidebarWidth}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setIsSidebarOpen}
      />

      {/* <!-- ===== Main ===== --> */}
      <Box
        component="main"
        className="grow-1 mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"
      >
        {children}
      </Box>

      {/* <!-- ===== Footer ===== --> */}
      <Footer />
    </Box>
  );
}
