import { Box, Button } from "@mui/material";
import GoogleIcon from "./icons/GoogleIcon";
import FacebookIcon from "./icons/FacebookIcon";
import GithubIcon from "./icons/GithubIcon";

export default function SocialButton() {
  return (
    <Box
      gap={2}
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
          borderRadius: "50px",
        }}>
        <FacebookIcon />
      </Button>

      <Button
        sx={{
          bgcolor: "#fff",
          borderRadius: "50px",
        }}>
        <GoogleIcon />
      </Button>

      <Button
        sx={{
          bgcolor: "#fff",
          borderRadius: "50px",
        }}>
        <GithubIcon />
      </Button>

    </Box>
  );
}
