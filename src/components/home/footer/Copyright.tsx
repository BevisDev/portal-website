import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Box } from "@mui/material";

const Copyright = () => {
  return (
    <Box>
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: "#000",
          fontWeight: "bold",
        }}
      >
        {"Copyright © "}
        <MuiLink href="https://mui.com/">Portal Website</MuiLink>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
};

export default Copyright;
