import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

const Copyright = () => {
  return (
    <Box>
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: "#000",
          fontWeight: "600",
        }}
      >
        {"Copyright © "}
        <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK}>BevisDev</Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
};

export default Copyright;
