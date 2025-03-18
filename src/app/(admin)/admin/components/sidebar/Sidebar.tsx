import { Box, Drawer, List, styled } from "@mui/material";
import { useCallback, useEffect, useRef } from "react";
import SidebarItems from "./SidebarItems";

const Menu = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

interface SidebarProps {
  sidebarWidth: number;
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function Sidebar({
  sidebarWidth,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // handle togger drawer
  const toggleDrawer = useCallback(
    (isOpen: boolean) => {
      setSidebarOpen(isOpen);
    },
    [setSidebarOpen]
  );

  // handle click outside to close the drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        toggleDrawer(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, toggleDrawer]);

  return (
    <Box component="section">
      <Drawer
        variant="persistent"
        anchor="left"
        open={sidebarOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          width: `${sidebarWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sidebarWidth,
            padding: "1rem",
          },
        }}
        ref={drawerRef}
      >
        {/* <!-- ===== Menu ===== --> */}
        <Menu disablePadding>
          <SidebarItems />
        </Menu>
        {/* <!-- ===== End Menu ===== --> */}
      </Drawer>
    </Box>
  );
}
