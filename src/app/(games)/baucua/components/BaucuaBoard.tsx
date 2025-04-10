"use client";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { BaucuaData } from "./BaucuaData";
import Image from "next/image";
import BaucuaDice from "./BaucuaDice";
import { useState } from "react";
import BaucuaHistory from "./BaucuaHistory";
import { CloseOutlined } from "@mui/icons-material";

function BaucuaBoard() {
  const [history, setHistory] = useState<Array<typeof BaucuaData>>([]);
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
        {showHistory ? "Hide history ↓" : "View history ↑"}
      </Button>

      <BaucuaHistory
        showHistory={showHistory}
        setShowHistory={setShowHistory}
        history={history}
      />

      {/* Dice roll */}
      <BaucuaDice />

      {/* Game */}
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
}

export default BaucuaBoard;
