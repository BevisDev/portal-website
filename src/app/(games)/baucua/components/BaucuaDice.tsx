"use client";

import "./style.css";
import { useRef, useState } from "react";
import { BaucuaData, PlateUnder, PlateUpsideDown } from "./BaucuaData";
import gsap from "gsap";
import { Box, Button, Paper } from "@mui/material";
import Image from "next/image";

const faceStyle = {
  position: "absolute",
  width: "80px",
  height: "80px",
  border: "2px solid #ffa726",
  backgroundColor: "#fffdf9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
};

const BaucuaDice = () => {
  const [isRolling, setIsRolling] = useState(false);
  const [isCovered, setIsCovered] = useState(false);
  const [diceFaces, setDiceFaces] = useState([
    BaucuaData[0],
    BaucuaData[0],
    BaucuaData[0],
  ]);
  const diceRefs = [useRef(null), useRef(null), useRef(null)];
  const bowlRef = useRef(null);

  const rollDice = async () => {
    if (isRolling) return;

    setIsRolling(true);
    setIsCovered(true);

    const len = BaucuaData.length;
    const newFaces = [...diceFaces];
    const animations: Promise<void>[] = [];

    diceRefs.forEach((ref, index) => {
      if (!ref.current) return;

      const randomIndex = Math.floor(Math.random() * len);
      newFaces[index] = BaucuaData[randomIndex];

      const faceRotations = [
        { x: 0, y: 0 },
        { x: 180, y: 0 },
        { x: 90, y: 0 },
        { x: -90, y: 0 },
        { x: 0, y: 90 },
        { x: 0, y: -90 },
      ];
      const { x, y } = faceRotations[randomIndex];

      const animationPromise = new Promise<void>((resolve) => {
        const tl = gsap.timeline({ onComplete: resolve });

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
          duration: 1,
          ease: "power2.out",
        });
      });

      animations.push(animationPromise);
    });

    await Promise.all(animations);
    setDiceFaces([...newFaces]);
    setTimeout(() => setIsRolling(false), 200); // Delay chút cho hiệu ứng mượt
  };

  const handleBowlClick = () => {
    if (isRolling) return;

    // Animate bowl mở ra
    gsap.to(bowlRef.current, {
      y: -200,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => setIsCovered(false),
    });
  };

  return (
    <Box className="flex flex-col items-center">
      <Box className="relative">
        {/* Plate under*/}
        <Box>
          <Image
            src={PlateUnder.src}
            alt={PlateUnder.alt}
            height={300}
            width={450}
            style={{ objectFit: "cover", zIndex: 0 }}
          />
        </Box>

        {/* Dices up */}
        <Box
          className="absolute top-[45%] left-1/2"
          sx={{
            transform: "translate(-50%, -50%)",
            width: 200,
            height: 200,
            zIndex: 1,
          }}
        >
          <Box
            ref={diceRefs[0]}
            className="cube"
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%) rotateX(20deg) rotateY(20deg)",
              width: 80,
              height: 80,
              transformStyle: "preserve-3d",
              transition: "transform 1s ease",
            }}
          >
            {BaucuaData.map((item, j) => (
              <Box
                key={j}
                className={`face ${
                  ["front", "back", "left", "right", "top", "bottom"][j]
                }`}
                sx={{
                  ...faceStyle,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Dice left */}
          <Box
            ref={diceRefs[1]}
            className="cube"
            sx={{
              position: "absolute",
              bottom: 5,
              left: "20%",
              transform: "translateX(-50%) rotateX(20deg) rotateY(20deg)",
              width: 80,
              height: 80,
              transformStyle: "preserve-3d",
              transition: "transform 1s ease",
            }}
          >
            {BaucuaData.map((item, j) => (
              <Box
                key={j}
                className={`face ${
                  ["front", "back", "left", "right", "top", "bottom"][j]
                }`}
                sx={faceStyle}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Dice right */}
          <Box
            ref={diceRefs[2]}
            className="cube"
            sx={{
              position: "absolute",
              bottom: 0,
              left: "80%",
              transform: "translateX(-50%) rotateX(20deg) rotateY(20deg)",
              width: 80,
              height: 80,
              transformStyle: "preserve-3d",
              transition: "transform 1s ease",
            }}
          >
            {BaucuaData.map((item, j) => (
              <Box
                key={j}
                className={`face ${
                  ["front", "back", "left", "right", "top", "bottom"][j]
                }`}
                sx={faceStyle}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Plate up side down */}
        {isCovered && (
          <Box
            ref={bowlRef}
            onClick={handleBowlClick}
            className="absolute top-[47%] left-1/2"
            sx={{
              transform: "translate(-50%, -50%)",
              height: 510,
              width: 520,
              cursor: "pointer",
              zIndex: 2,
              borderRadius: "50%",
            }}
          >
            <Image
              src={PlateUpsideDown.src}
              alt={PlateUpsideDown.alt}
              fill
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </Box>
        )}
      </Box>

      {/* Roll */}
      <Button
        variant="contained"
        color="success"
        onClick={rollDice}
        disabled={isRolling}
        sx={{
          height: 60,
          width: 140,
          borderRadius: 3,
          fontSize: 18,
        }}
      >
        Roll 🎲
      </Button>
    </Box>
  );
};

export default BaucuaDice;
