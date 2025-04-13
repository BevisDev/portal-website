"use client";
import { Box, Button, Paper } from "@mui/material";
import { BaucuaData, BaucuaItem } from "./BaucuaData";
import Image from "next/image";
import BaucuaDice from "./BaucuaDiceList";
import { useState } from "react";
import BaucuaHistory from "./BaucuaHistory";
import BaucuaDiceList from "./BaucuaDiceList";

function BaucuaBoard() {
  const [history, setHistory] = useState<BaucuaItem[][]>([]);
  const [showHistory, setShowHistory] = useState(false);

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
      {/* History */}
      <Button
        type="button"
        variant="outlined"
        onClick={() => setShowHistory((prev) => !prev)}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 100,
          zIndex: 1301,
          backgroundColor: "#e7e3e7",
          color: "#1e1b1b",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        {showHistory ? "Đóng tab ↓" : "Soi cầu ↑"}
      </Button>

      <BaucuaHistory
        showHistory={showHistory}
        setShowHistory={setShowHistory}
        history={history}
      />

      {/* Dice roll */}
      <BaucuaDiceList
        saveRecentPlays={(faces) => setHistory((prev) => [faces, ...prev])}
      />

      {/* Board */}
      <Box className="mt-4 flex flex-col items-center justify-center gap-4">
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
                width: 175,
                height: 140,
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
                width={175}
                height={140}
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default BaucuaBoard;
