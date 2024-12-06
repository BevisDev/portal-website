import { Box } from "@mui/material";
import Copyright from "./Copyright";

const Footer = () => {
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
};

export default Footer;
