import { Box, Container } from "@mui/material";
import React from "react";

type SignInLayoutProps = Readonly<{ children: React.ReactNode }>;
const SignInLayout: React.FC<SignInLayoutProps> = ({ children }) => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: 'url("/images/backgrounds/bg-login.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">{children}</Container>
    </Box>
  );
};

export default SignInLayout;
