import { Box } from "@mui/material";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        margin: "0 auto 1rem auto",
      }}
    >
      <Copyright />
    </Box>
  );
}
