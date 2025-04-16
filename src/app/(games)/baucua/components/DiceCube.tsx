"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { Data, Item } from "./data";
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

export type DiceCubeRef = {
  roll: () => Promise<number>;
};

type DiceCubeProps = {
  item: Item;
  size?: number;
  className?: string;
};

const DiceCube = forwardRef<DiceCubeRef, DiceCubeProps>(
  ({ size = 80, className }, ref) => {
    const diceRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({
      roll,
    }));

    // handle roll
    const roll = (
      idx: number = Math.floor(Math.random() * Data.length)
    ): Promise<number> => {
      return new Promise((resolve) => {
        console.log("Rolling dice... ", idx);
        if (!diceRef.current) return resolve(0);
        const { x, y } = faceRotations[idx];

        const tl = gsap.timeline({
          onComplete: () => {
            resolve(idx);
          },
        });

        for (let i = 0; i < 3; i++) {
          tl.to(diceRef.current, {
            rotateX: "+=720",
            rotateY: "+=720",
            duration: 0.8,
            ease: "power2.inOut",
          });
        }

        tl.to(diceRef.current, {
          rotateX: 720 + x,
          rotateY: 720 + y,
          duration: 1,
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
          className={className}
          sx={{
            width: size,
            height: size,
            position: "absolute",
            transformStyle: "preserve-3d",
          }}
        >
          {Data.map((item, j) => (
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

DiceCube.displayName = "BaucuaDice";
export default DiceCube;
