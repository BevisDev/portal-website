"use client";

import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import React from "react";
import Search from "./Search";
import Notifications from "./Notifications";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box component="header">
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
        }}
        color="transparent"
      >
        <Toolbar>
          {/* <!-- ===== Open/Close Sidebar ===== --> */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleSidebarOpen()}
            sx={{ mr: 2 }}
          >
            {sidebarOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>

          {/* ---=-- Search ------ */}
          <Search />

          <Box sx={{ flexGrow: 1 }} />

          {/* Notification */}
          <Notifications />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
