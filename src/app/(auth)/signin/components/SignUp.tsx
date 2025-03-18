"use client";
import { months, rangeDay, rangeYear } from "@/utils/datetime-utils";
import { phoneNumberRegex } from "@/utils/validate-utils";
import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Slide,
  Tooltip,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { TransitionProps } from "@mui/material/transitions";
import { useFormik } from "formik";
import { forwardRef } from "react";
import * as Yup from "yup";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";

const transitionComponent = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} timeout={500} />;
});

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  birthDate: Yup.object({
    month: Yup.string().required("Month is required"),
    day: Yup.number().required("Day is required"),
    year: Yup.number().required("Year is required"),
  }),
  email: Yup.string().required("Username is required").email("Invalid Email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be of minimum 8 characters length"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .min(8, "Confirm Password should be of minimum 8 characters length")
    .oneOf([Yup.ref("password"), ""], "Password must match"),
  phoneNumber: Yup.string()
    .matches(phoneNumberRegex, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(12, "Phone number should be of maximum 12 digits")
    .required("Phone number is required"),
});

interface SignUpProps {
  open: boolean;
  handleClose: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ open, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthDate: {
        month: "",
        day: "",
        year: "",
      },
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("SignUp Form values:", values);
      handleClose();
    },
  });

  return (
    <Dialog
      open={open}
      onClose={() => handleClose()}
      TransitionComponent={transitionComponent}
      keepMounted
      PaperProps={{
        component: "form",
        style: {
          borderRadius: "16px",
        },
        onSubmit: formik.handleSubmit,
      }}
      fullWidth
      maxWidth="sm"
    >
      {/* Content */}
      <DialogContent
        dividers
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          padding: "2rem",
          maxHeight: "525px",
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            padding: "1rem 1.5rem",
            fontSize: "28px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Create Your Account
        </Typography>

        {/* Row 1: First Name & Last Name */}
        <Grid2
          container
          spacing={2}
          sx={{
            marginBottom: "13px",
          }}
        >
          {/* First Name field*/}
          <Grid2 size={6}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </FormControl>
          </Grid2>

          {/* Last Name field */}
          <Grid2 size={6}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </FormControl>
          </Grid2>
        </Grid2>

        {/* Row 2: Birthday */}
        <Box>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Typography
              variant="body2"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Birthday
            </Typography>
            <Tooltip
              title="Your birth date helps us provide personalized experiences"
              placement="right-start"
            >
              <HelpOutlinedIcon sx={{ fontSize: "19px" }} />
            </Tooltip>
          </Box>

          <Grid2 container spacing={2}>
            {/* Month field*/}
            <Grid2 size={4}>
              <FormControl
                fullWidth
                error={Boolean(
                  formik.touched.birthDate?.month &&
                    formik.errors.birthDate?.month
                )}
              >
                <InputLabel id="month-select">Month</InputLabel>
                <Select
                  labelId="month-select"
                  label="Month"
                  sx={{
                    borderRadius: "12px",
                  }}
                  value={formik.values.birthDate.month}
                  name="birthDate.month"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {months.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.birthDate?.month &&
                  formik.errors.birthDate?.month && (
                    <FormHelperText>
                      {formik.errors.birthDate.month}
                    </FormHelperText>
                  )}
              </FormControl>
            </Grid2>

            {/* Day field */}
            <Grid2 size={4}>
              <FormControl
                fullWidth
                error={Boolean(
                  formik.touched.birthDate?.day && formik.errors.birthDate?.day
                )}
              >
                <InputLabel id="day-select">Day</InputLabel>
                <Select
                  labelId="day-select"
                  label="Day"
                  name="birthDate.day"
                  value={formik.values.birthDate.day}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{
                    borderRadius: "12px",
                  }}
                >
                  {rangeDay().map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.birthDate?.day &&
                  formik.errors.birthDate?.day && (
                    <FormHelperText>
                      {formik.errors.birthDate.day}
                    </FormHelperText>
                  )}
              </FormControl>
            </Grid2>

            {/* Year field */}
            <Grid2 size={4}>
              <FormControl
                fullWidth
                error={Boolean(
                  formik.touched.birthDate?.year &&
                    formik.errors.birthDate?.year
                )}
              >
                <InputLabel id="year-select">Year</InputLabel>
                <Select
                  labelId="year-select"
                  label="Year"
                  name="birthDate.year"
                  value={formik.values.birthDate.year}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{
                    borderRadius: "12px",
                  }}
                >
                  {rangeYear().map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.birthDate?.year &&
                  formik.errors.birthDate?.year && (
                    <FormHelperText>
                      {formik.errors.birthDate.year}
                    </FormHelperText>
                  )}
              </FormControl>
            </Grid2>
          </Grid2>
        </Box>

        <Divider style={{ margin: "12px 0" }} />

        {/* Email address */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            name="email"
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </FormControl>

        {/* Phone Number */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </FormControl>
        
        {/* Password */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            name="password"
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

        {/* Confirm Password */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </FormControl>
      </DialogContent>

      {/* Actions */}
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1.5rem",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            formik.resetForm();
            handleClose();
          }}
        >
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUp;
