import { Box } from "@mui/material";
import BaseButton from "../base/BaseButton";
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
      <BaseButton
        icon={<FacebookIcon />}
        sx={{
          bgcolor: "#1877F2",
          color: "#fff",
          borderRadius: "50px",
        }}
      />
      <BaseButton
        icon={<GoogleIcon />}
        sx={{
          bgcolor: "#fff",
          color: "#000",
          border: "1px solid #ddd",
          borderRadius: "50px",
        }}
      />
      <BaseButton
        icon={<GithubIcon />}
        sx={{
          bgcolor: "#fff",
          color: "#000",
          borderRadius: "50px",
        }}
      />
    </Box>
  );
}
