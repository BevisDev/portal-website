"use client";

import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { BaucuaData } from "./components/BaucuaData";
import BaucuaDice from "./components/BaucuaDice";

const BaucuaGame = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/backgrounds/bg-tet.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "30px 90px",
      }}
    >
      <Box
        sx={{
          marginBottom: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            maxWidth: "600px",
          }}
        >
          {BaucuaData.map((v, index) => (
            <Box key={index}>
              <Paper
                elevation={6}
                sx={{
                  height: "180px",
                  width: "170px",
                  textAlign: "center",
                  padding: "3px",
                }}
              >
                <Image src={v.src} alt={v.alt} height={200} width={200} />
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Dice roll */}
      <BaucuaDice />

      {/* History */}
      <Box>
        <Typography className="font-medium text-[24px] px-3 text-white">
          History:
        </Typography>
        <Box className="px-2 py-1 border flex-items-center"></Box>
      </Box>
    </Box>
  );
};

export default BaucuaGame;
