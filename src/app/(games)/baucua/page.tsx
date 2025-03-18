"use client";

import { Box, Container, Paper } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import { BaucuaData } from "./components/BaucuaData";
import BaucuaDice from "./components/BaucuaDice";

const BaucuaGame = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  // // handle roll
  // const handleRoll = () => {
  //   const num1 = Math.floor(Math.random() * 6) + 1;
  //   const num2 = Math.floor(Math.random() * 6) + 1;
  //   const num3 = Math.floor(Math.random() * 6) + 1;
  //   setNumbers([num1, num2, num3]);
  // };

  // useEffect(() => {
  //   let isActive = true;
  //   if (isActive && numbers && numbers.length > 0) {
  //     const tdElements = document.querySelectorAll("table.board td");
  //     let arr = new Array();
  //     numbers.forEach((number, index) => {
  //       const td = tdElements[number - 1];
  //       createImageResult(td, arr);
  //     });
  //     const history = document.getElementById("history");
  //     // create wrapper
  //     const divWrapper = document.createElement("div");
  //     arr.map((el) => divWrapper.appendChild(el));
  //     history.appendChild(divWrapper);
  //   }
  //   return () => {
  //     isActive = false;
  //   };
  // }, [numbers]);

  // const createImageResult = (td, arr) => {
  //   const image = td.querySelector("img");
  //   // create div image
  //   const divImage = document.createElement("div");
  //   divImage.className = "p-1 rounded w-[80px]";

  //   // create image
  //   const imageResult = document.createElement("img");
  //   imageResult.src = image.src;
  //   imageResult.alt = image.alt;
  //   imageResult.className = "w-[100px] h-[50px]";
  //   // append child
  //   divImage.appendChild(imageResult);
  //   arr.push(divImage);
  // };

  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/backgrounds/bg-tet.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          padding: "35px 0",
        }}
      >
        <Grid
          container
          sx={{
            marginBottom: "35px",
            padding: "0 35px",
          }}
          rowSpacing={2}
          columnSpacing={{ xs: 6, sm: 8, md: 10 }}
        >
          {BaucuaData.map((v, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 4 }}>
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
            </Grid>
          ))}
        </Grid>

        {/* Dice roll */}
        <BaucuaDice />
      </Container>

      {/* <div className="px-24">
        <h3 className="font-semibold text-[24px] px-3 text-white">History:</h3>
        <div
          id="history"
          className="px-2 py-1 border flex-items-center flex-wrap"
        ></div>
      </div> */}
    </Box>
  );
};

export default BaucuaGame;
