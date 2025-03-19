import React from "react";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import SignIn from "./SignIn";

export const metadata: Metadata = {
  title: "Sign In | Portal Website by BevisDev",
  description: "Welcome to my Portal Website",
};

const SignInPage = () => {
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
      <Container maxWidth="sm">
        <SignIn />
      </Container>
    </Box>
  );
};

export default SignInPage;
