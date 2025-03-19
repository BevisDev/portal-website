"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Typography,
  Card,
  Box,
  FormControl,
  Link,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import SocialButton from "@/components/social-button/SocialButton";
import { useRouter } from "next/navigation";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
// import { useApi } from "@/hooks/useApi";

const validationSchema = Yup.object({
  username: Yup.string().required("email or phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be of minimum 8 characters length"),
});

const SignIn = () => {
  // const { data, error, isLoading } = useApi({
  //   url: "/signin-config",
  //   method: "GET",
  // });
  const [openForgotPwd, setOpenForgotPwd] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Form values:", values);
      document.cookie = "authToken=sadasdas; path=/";
      router.push("/");
    },
  });

  // toggle Dialog
  const toggleDialog = (isOpen: boolean, isSignUp: boolean = false) => {
    if (isOpen) {
      isSignUp ? setOpenSignUp(true) : setOpenForgotPwd(true);
    } else {
      isSignUp ? setOpenSignUp(false) : setOpenForgotPwd(false);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        padding: "36px 62px",
        margin: "auto",
        maxWidth: "490px",
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          width: "100%",
          textAlign: "center",
          mb: 2,
          fontWeight: "500",
          fontSize: "2.5rem",
        }}
      >
        Sign in
      </Typography>
      <Box
        component="form"
        sx={{
          mt: "28px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        onSubmit={formik.handleSubmit}
      >
        <FormControl>
          <TextField
            fullWidth
            label="Email or PhoneNumber"
            name="username"
            id="username"
            variant="outlined"
            value={formik.values.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </FormControl>

        <FormControl>
          <TextField
            fullWidth
            label="password"
            name="password"
            id="password"
            type="password"
            placeholder="••••••"
            variant="outlined"
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </FormControl>

        <Box>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Stay signed in"
          />
        </Box>

        <SocialButton />

        {/* Action Sign In */}
        <Button
          variant="contained"
          type="submit"
          sx={{
            mt: 1,
            borderRadius: "12px",
          }}
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Signing..." : "SIGN IN"}
        </Button>

        {/* Components Link*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {/* Forgot password */}
          <Box>
            <Link
              component="button"
              variant="body2"
              type="button"
              onClick={() => toggleDialog(true)}
              sx={{
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              CAN&apos;T SIGN IN?
            </Link>
            <ForgotPassword
              open={openForgotPwd}
              handleClose={() => toggleDialog(false)}
            />
          </Box>

          {/* Sign Up */}
          <Box>
            <Link
              component="button"
              type="button"
              variant="body2"
              onClick={() => toggleDialog(true, true)}
              sx={{
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              CREATE ACCOUNT
            </Link>
            <SignUp
              open={openSignUp}
              handleClose={() => toggleDialog(false, true)}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default SignIn;
