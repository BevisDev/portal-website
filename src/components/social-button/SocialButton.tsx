import { Box, Button } from "@mui/material";
import GoogleIcon from "./icons/GoogleIcon";
import FacebookIcon from "./icons/FacebookIcon";
import GithubIcon from "./icons/GithubIcon";

export default function SocialButton() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Button
        sx={{
          bgcolor: "#1877F2",
          borderRadius: "1.5rem",
          borderWidth: "1px",
        }}
      >
        <FacebookIcon />
      </Button>

      <Button
        sx={{
          borderRadius: "1.5rem",
          border: "1px solid #eee",
        }}
      >
        <GoogleIcon />
      </Button>

      <Button
        sx={{
          borderRadius: "1.5rem",
          border: "1px solid #eee",
        }}
      >
        <GithubIcon />
      </Button>
    </Box>
  );
}
