import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        margin: "auto",
        backgroundColor: "rgba(202, 201, 201, 0.7)",
      }}
    >
      <CircularProgress size="3.5rem" />
    </Box>
  );
};

export default Loader;
