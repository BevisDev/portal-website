"use client";

import "./style.css";
import { useRef, useState } from "react";
import { BaucuaData } from "./BaucuaData";
import gsap from "gsap";
import { Box, Button, Modal, Paper } from "@mui/material";
import Image from "next/image";

const BaucuaDice = () => {
  const [isRolling, setIsRolling] = useState(false);
  const [diceFaces, setDiceFaces] = useState([
    BaucuaData[0],
    BaucuaData[0],
    BaucuaData[0],
  ]);
  const diceRefs = [useRef(null), useRef(null), useRef(null)];

  const rollDice = async () => {
    if (isRolling) return;

    setIsRolling(true);

    const len = BaucuaData.length;
    const newFaces = [...diceFaces];
    const animations: Promise<void>[] = [];

    diceRefs.forEach((ref, index) => {
      if (!ref.current) {
        return;
      }

      // random dice
      const randomIndex = Math.floor(Math.random() * len);
      newFaces[index] = BaucuaData[randomIndex];

      const faceRotations = [
        { x: 0, y: 0 }, // Mặt 1 (trên)
        { x: 180, y: 0 }, // Mặt 2 (dưới)
        { x: 90, y: 0 }, // Mặt 3 (trái)
        { x: -90, y: 0 }, // Mặt 4 (phải)
        { x: 0, y: 90 }, // Mặt 5 (trước)
        { x: 0, y: -90 }, // Mặt 6 (sau)
      ];

      // Chọn góc quay tương ứng với mặt xúc xắc random
      const { x, y } = faceRotations[randomIndex];

      const animationPromise = new Promise<void>((resolve) => {
        const tl = gsap.timeline({
          onComplete: resolve,
        });

        // roll 3 times before
        for (let i = 0; i < 3; i++) {
          tl.to(ref.current, {
            rotateX: "+=720",
            rotateY: "+=720",
            duration: 0.8,
            ease: "power2.inOut",
          });
        }

        tl.to(ref.current, {
          rotateX: 720 + x,
          rotateY: 720 + y,
          // rotateZ: 0, // vertical
          duration: 1,
          ease: "power2.out",
        });
      });

      animations.push(animationPromise);
    });

    await Promise.all(animations);
    setDiceFaces([...newFaces]);
    setIsRolling(false);
  };

  return (
    <Box className="flex flex-col items-center gap-8 pb-6">
      <Box className="flex gap-8">
        {diceRefs.map((diceRef, diceIndex) => (
          <Box key={diceIndex} className="cube" ref={diceRef}>
            {BaucuaData.map((item, index) => (
              <Paper
                elevation={3}
                key={index}
                className={`face ${
                  ["front", "back", "left", "right", "top", "bottom"][index]
                }`}
              >
                <Image src={item.src} alt={item.alt} width={50} height={50} />
              </Paper>
            ))}
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        color="success"
        onClick={rollDice}
        disabled={isRolling}
      >
        Roll 🎲
      </Button>
    </Box>
  );
};

export default BaucuaDice;
