import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "white",
      }}
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://github.com/BevisDev" className="text-[#16f2b3]">
        BevisDev Website
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
