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
  Container,
} from "@mui/material";
import SocialButton from "@/components/social-button/SocialButton";
import BaseButton from "@/components/base/BaseButton";
import ForgotPassword from "@/app/signin/ForgotPassword";
import { useApi } from "@/hooks/useApi";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be of minimum 8 characters length"),
});

export default function SignIn() {
  // const { data, error, isLoading } = useApi({
  //   url: "/signin-config",
  //   method: "GET",
  // });
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      document.cookie = "authToken=sadasdas; path=/";
      router.push("/");
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Card
          variant="outlined"
          sx={{
            padding: "76px",
            borderRadius: 4,
            backgroundImage: 'url("/images/backgrounds/bg-form-login.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            border: "none",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              width: "100%",
              textAlign: "center",
              mb: 2,
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
                name="username"
                id="username"
                label="USERNAME"
                variant="outlined"
                value={formik.values.username}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>

            <FormControl>
              <TextField
                fullWidth
                name="password"
                id="password"
                type="password"
                placeholder="••••••"
                variant="outlined"
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>

            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    sx={{
                      color: "#6a7080",
                      "&.Mui-checked": {
                        color: "#5a8cfa",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(90, 140, 250, 0.1)",
                      },
                    }}
                  />
                }
                label="Stay signed in"
                sx={{
                  color: "#cfd3dc",
                  fontSize: "16px",
                }}
              />
            </Box>

            <SocialButton />

            <BaseButton
              label={formik.isSubmitting ? "Signing..." : "SIGN IN"}
              type="submit"
              sx={{ mt: 2 }}
              disabled={formik.isSubmitting}
            />

            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Link
                  component="button"
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  onClick={handleClickOpen}
                >
                  Can&apos;t sign in?
                </Link>
                <ForgotPassword open={open} handleClose={handleClose} />
              </Box>
              <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                Don&apos;t have an account? {""}
                <Link href="/signup" variant="body1">
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
