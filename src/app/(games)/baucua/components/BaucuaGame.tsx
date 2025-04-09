"use client";
import { Box, Button, Paper } from "@mui/material";
import { BaucuaData } from "./BaucuaData";
import Image from "next/image";
import BaucuaDice from "./BaucuaDice";
import { useState } from "react";
import BaucuaHistory from "./BaucuaHistory";

const BaucuaGame = () => {
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState<Array<typeof BaucuaData>>([]);

  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/backgrounds/bg-tet.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: {
          xs: "20px",
          sm: "30px 60px",
          md: "30px 90px",
        },
      }}
    >
      {/* <Box className="absolute top-4 right-6 z-10">
        <Button variant="contained" onClick={() => setHistoryOpen(true)}>
          🕘 History
        </Button>
      </Box> */}

      {/* History */}
      {/* <BaucuaHistory
        historyOpen={historyOpen}
        setHistoryOpen={setHistoryOpen}
        history={history}
      /> */}

      {/* Dice roll */}
      <BaucuaDice />
      <Box className="m-4"></Box>

      {/* Game */}
      <Box className="flex flex-col items-center justify-center gap-4">
        <Box
          className="grid grid-cols-3 gap-4"
          sx={{
            maxWidth: "800px",
          }}
        >
          {BaucuaData.map((v, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                width: 200,
                height: 180,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fefefe",
                borderRadius: "16px",
              }}
            >
              <Image
                src={v.src}
                alt={v.alt}
                width={230}
                height={200}
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BaucuaGame;
