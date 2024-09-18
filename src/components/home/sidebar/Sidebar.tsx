import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { boolean } from "yup";

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
  const toggleDrawer = (isOpen: boolean) => {
    setSidebarOpen(isOpen);
  };

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
  }, [sidebarOpen]);

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
            boxSizing: "border-box",
          },
          bgcolor: "rgb(102, 157, 246)",
        }}
        ref={drawerRef}
      >
        {/* <!-- ===== Menu ===== --> */}
        <List
          disablePadding
          sx={{
            bgcolor: "#f7f5f2",
          }}
        >
          {/* <!-- ===== Icon Website ===== --> */}
          <ListItemButton component="a" href="#customized-list">
            <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="Firebash"
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "500",
                letterSpacing: 0,
                color: "black",
              }}
            />
          </ListItemButton>

          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color: "black",
                  }}
                  primary={text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
