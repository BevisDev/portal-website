"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { BaucuaData, BaucuaItem } from "./BaucuaData";
import { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

const faceOrder = ["front", "back", "top", "bottom", "left", "right"];

const faceRotations = [
  { x: 0, y: 0 },
  { x: 180, y: 0 },
  { x: 90, y: 0 },
  { x: -90, y: 0 },
  { x: 0, y: 90 },
  { x: 0, y: -90 },
];

export type BaucuaDiceRef = {
  roll: () => Promise<number>;
};

type BaucuaDiceProps = {
  item: BaucuaItem;
  size?: number;
};

const BaucuaDice = forwardRef<BaucuaDiceRef, BaucuaDiceProps>(
  ({ size = 80 }, ref) => {
    const diceRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({
      roll,
    }));

    // handle roll
    const roll = (
      idx: number = Math.floor(Math.random() * BaucuaData.length)
    ): Promise<number> => {
      return new Promise((resolve) => {
        if (!diceRef.current) return resolve(0);
        const tl = gsap.timeline({
          onComplete: () => {
            console.log("🎯 Mặt về:", idx);
            resolve(idx);
          },
        });
        tl.to(diceRef.current, {
          rotateX: 720 + faceRotations[idx].x,
          rotateY: 720 + faceRotations[idx].y,
          duration: 1.2,
          ease: "power2.out",
        });
      });
    };

    return (
      <Box
        sx={{
          perspective: 1000,
          width: size,
          height: size,
        }}
      >
        <Box
          ref={diceRef}
          sx={{
            width: size,
            height: size,
            position: "relative",
            transformStyle: "preserve-3d",
            transform: "rotateX(-20deg) rotateY(20deg)",
            transition: "transform 1s ease",
            zIndex: 1,
          }}
        >
          {BaucuaData.map((item, j) => (
            <Box
              key={j}
              className={`face ${faceOrder[j]}`}
              sx={{
                border: "2px solid #ffa726",
                backgroundColor: "#fffdf9",
                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
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
      </Box>
    );
  }
);

BaucuaDice.displayName = "BaucuaDice";
export default BaucuaDice;
