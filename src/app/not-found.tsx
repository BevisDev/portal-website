import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function NotFound() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/404/404.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        flexDirection: "column",
      }}
    >
      <Box>
        <Image
          src="/images/404/404_dog.jpg"
          width={400}
          height={180}
          alt="404 Page"
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#fff",
        }}
      >
        Why are you here?
      </Typography>

      <p className="text-[#a8b3cf] text-[15px]">
        You&apos;re not supposed to be here.
      </p>

      <Button
        variant="contained"
        href="/"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          color: "#0e1217",
          fontSize: "15px",
          fontWeight: 700,
        }}
      >
        GO HOME
      </Button>
    </Box>
  );
}
