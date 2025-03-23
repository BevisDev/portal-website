"use client";

import { Badge, Box, IconButton, Popover, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";
import { useState } from "react";

const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "notification-popover" : undefined;

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton
        size="large"
        aria-label="notifications"
        color="inherit"
        onClick={handleClick}
      >
        <Badge badgeContent={15} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "8px",
            width: "300px",
          },
        }}
      >
        {/* Header */}
        <Box className="flex justify-between items-center px-4 py-3 border-b border-gray-600">
          <Typography className="font-semibold">Notifications</Typography>
          <Typography className="text-gray-500 text-sm cursor-pointer hover:text-gray-200">
            Mark all as read
          </Typography>
        </Box>

        {/* notifications empty */}
        <Box className="flex flex-col items-center justify-center py-10 px-5 gap-2">
          <Image
            src="/images/svg/commons/notification.svg"
            alt="No Notifications"
            width={96}
            height={96}
          />
          <Typography className="text-gray-500">
            Your notice will appear here.
          </Typography>
        </Box>
      </Popover>
    </Box>
  );
};

export default Notifications;
