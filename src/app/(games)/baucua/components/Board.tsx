"use client";
import { Box, Button, Paper } from "@mui/material";
import { Data, Item } from "./data";
import Image from "next/image";
import { useState } from "react";
import History from "./History";
import DiceList from "./DiceList";

function Board() {
  const [history, setHistory] = useState<Item[][]>([]);
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

      <History
        showHistory={showHistory}
        setShowHistory={setShowHistory}
        history={history}
      />

      {/* Dice roll */}
      <DiceList
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
          {Data.map((v, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                width: 150,
                height: 140,
                borderRadius: "10px",
              }}
            >
              <Image
                src={v.src}
                alt={v.alt}
                width={150}
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

export default Board;
