"use client";
import { Box, Divider, Grid2 } from "@mui/material";

const Board = () => {
  return (
    <Box
      sx={{
        bgcolor: "#eee",
        p: 2,
        borderRadius: "12px",
      }}
    >
      <Divider />

      {/* main */}
      <Box>
        <Box
          sx={{
            bgcolor: "red",
            height: "700px",
          }}
        >
          <Grid2 container spacing={2}>
            {/* Header Columns */}
          </Grid2>
          Red
        </Box>
      </Box>
    </Box>
  );
};

export default Board;
