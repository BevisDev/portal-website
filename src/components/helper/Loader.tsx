import { Box, CircularProgress } from "@mui/material";
import { Metadata } from "next";

export const loadingMeta: Metadata = {
  title: "Welcome to my Portal Website by BevisDev",
  description: "Welcome to my Portal Website",
};

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <CircularProgress size="3.25rem" />
    </Box>
  );
}
