import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // handle togger drawer
  const toggleDrawer = useCallback(
    (isOpen: boolean) => {
      setSidebarOpen(isOpen);
    },
    [setSidebarOpen]
  );

  // handle open menu items
  const handleOpenItems = (id: number) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

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
        <List disablePadding>
          <ListItemButton onClick={() => router.push("/")}>
            <ListItemIcon>
              <Image
                alt="logo"
                src={"/images/logo/dark-logo.svg"}
                width={200}
                height={100}
              />
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton
            onClick={() => router.push("/page-management")}
            sx={{
              "&:hover": {
                backgroundColor: "#1976d2", // Màu nền khi hover
              },
              backgroundColor: "#f5f5f5", // Màu nền mặc định
              color: "inherit",
              borderRadius: "8px", // Bo tròn góc
            }}
          >
            <ListItemText
              primary="Page Mangement"
              sx={{
                "&.MuiListItemText-root": {
                  color: "#000",
                },
                "&:hover": {
                  color: "#fff",
                },
                color: "black !important",
              }}
            />
          </ListItemButton>
        </List>
        {/* <!-- ===== End Menu ===== --> */}
      </Drawer>
    </Box>
  );
}
