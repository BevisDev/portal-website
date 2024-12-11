import {
  Box,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { HomeRoute } from "@/routes/HomeRoute";

export default function SidebarItems() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<{ [key: string]: boolean }>({});

  // toggle menu
  const toggleMenu = (label: string) => {
    setOpenMenu((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Box>
      {HomeRoute.filter((item) => item.visible).map((item, index) => (
        <React.Fragment key={index}>
          <ListItemButton
            onClick={() => {
              item.path ? handleNavigation(item.path) : toggleMenu(item.label);
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />

            {/* show toggle Menu */}
            {item.children && item.children.some((child) => child.visible) ? (
              openMenu[item.label] ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )
            ) : null}
          </ListItemButton>

          {/* SubMenu */}
          {item.children && item.children.some((child) => child.visible) && (
            <Collapse in={openMenu[item.label]} timeout="auto" unmountOnExit>
              <Box ml={4}>
                {item.children.map((child, childIndex) => (
                  <ListItemButton
                    key={childIndex}
                    onClick={() => handleNavigation(child.path!)}
                  >
                    <ListItemIcon>{child.icon}</ListItemIcon>
                    <ListItemText primary={child.label} />
                  </ListItemButton>
                ))}
              </Box>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
}
