"use client";

import "./style.css";
import { useRef, useState } from "react";
import { Data, Item, PlateUnder, PlateUpsideDown } from "./data";
import gsap from "gsap";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import DiceCube, { DiceCubeRef } from "./DiceCube";

type DiceListProps = {
  saveRecentPlays: (faces: Item[]) => void;
};

const DiceList = ({ saveRecentPlays }: DiceListProps) => {
  const [isRolling, setIsRolling] = useState(false);
  const [isCovered, setIsCovered] = useState(false);
  const [diceFaces, setDiceFaces] = useState<Item[]>([
    Data[0],
    Data[0],
    Data[0],
  ]);
  const diceRefs = [useRef<DiceCubeRef>(null), useRef(null), useRef(null)];
  const bowlRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const rollDice = async () => {
    if (isRolling) return;

    setIsRolling(true);
    setIsCovered(true);

    const tl = gsap.timeline();

    tl.to(boxRef.current, {
      keyframes: [
        { x: 6, y: 0, rotateZ: 4 },
        { x: 4, y: 4, rotateZ: -4 },
        { x: 0, y: 6, rotateZ: 4 },
        { x: -4, y: 4, rotateZ: -4 },
        { x: -6, y: 0, rotateZ: 4 },
        { x: -4, y: -4, rotateZ: -4 },
        { x: 0, y: -6, rotateZ: 4 },
        { x: 4, y: -4, rotateZ: -4 },
        { x: 6, y: 0, rotateZ: 0 },
      ],
      duration: 0.6,
      repeat: 2,
      ease: "power1.inOut",
      transformOrigin: "center center",
    });

    tl.to(boxRef.current, {
      rotateZ: 6,
      duration: 0.1,
      repeat: 3,
      yoyo: true,
      ease: "power1.inOut",
    });

    tl.to(boxRef.current, {
      x: 0,
      y: 0,
      rotateZ: 0,
      duration: 0.2,
      ease: "power2.out",
    });

    const promises = diceRefs.map(
      (ref) => ref.current?.roll() ?? Promise.resolve(0)
    );

    const indices = await Promise.all(promises);
    const newFaces = indices.map((idx) => Data[idx]);

    setDiceFaces(newFaces);
    saveRecentPlays(newFaces);
    setTimeout(() => setIsRolling(false), 200);
  };

  const handleBowlClick = () => {
    if (isRolling) return;

    const tl = gsap.timeline({
      onComplete: () => setIsCovered(false),
    });

    tl.to(bowlRef.current, {
      y: -10,
      rotateZ: 3,
      duration: 0.15,
      yoyo: true,
      repeat: 2,
      ease: "power1.inOut",
    });
  };

  return (
    <Box className="flex flex-col items-center">
      <Box className="relative" ref={boxRef}>
        {/* Plate under*/}
        <Image
          src={PlateUnder.src}
          alt={PlateUnder.alt}
          height={300}
          width={450}
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        {/* Plate up side down */}
        {isCovered && (
          <Box
            ref={bowlRef}
            onClick={handleBowlClick}
            className="absolute top-[-10%] left-[-5%]"
            sx={{
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
              style={{ objectFit: "cover" }}
            />
          </Box>
        )}

        {/* Dices */}
        <Box
          className="absolute top-[100] left-[40%]"
          sx={{
            width: 200,
            height: 200,
            zIndex: 1,
          }}
        >
          <DiceCube item={Data[0]} ref={diceRefs[0]} className="cube-top" />
          <DiceCube item={Data[0]} ref={diceRefs[1]} className="cube-left" />
          <DiceCube item={Data[0]} ref={diceRefs[2]} className="cube-right" />
        </Box>
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
          zIndex: 1500,
        }}
      >
        Lắc 🎲
      </Button>
    </Box>
  );
};

export default DiceList;
