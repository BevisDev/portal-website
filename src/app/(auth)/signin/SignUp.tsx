"use client";
import {
  Box,
  Card,
  Divider,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Slide,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface SignUpProps {
  open: boolean;
  handleCancle: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ open, handleCancle }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => handleCancle()}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
        },
      }}
      sx={{ m: 0, p: 2 }}
      fullWidth
      maxWidth="sm"
    >
      {/* Title */}
      <DialogTitle
        sx={{
          padding: "1rem 1.5rem",
          fontSize: "28px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Create Your Account
      </DialogTitle>

      {/* Content */}
      <DialogContent
        dividers
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
        }}
      >
        {/* Row 1: First Name & Last Name */}
        <Grid2
          container
          spacing={2}
          sx={{
            marginBottom: "13px",
          }}
        >
          <Grid2 size={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
            />
          </Grid2>
        </Grid2>

        {/* Row 2: Birthday */}
        <Box
          sx={{
            marginBottom: "13px",
          }}
        >
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <span style={{ fontWeight: "bold" }}>Birthday</span>
            <span style={{ fontSize: "small", color: "gray" }}>?</span>
          </Box>

          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <FormControl fullWidth>
                <InputLabel>Month</InputLabel>
                <Select>
                  {months.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 size={4}>
              <FormControl fullWidth>
                <InputLabel>Day</InputLabel>
                <Select>
                  {Array.from({ length: 31 }, (_, i) => (
                    <MenuItem key={i} value={i + 1}>
                      {i + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 size={4}>
              <FormControl fullWidth>
                <InputLabel>Year</InputLabel>
                <Select>
                  {Array.from({ length: 100 }, (_, i) => (
                    <MenuItem key={i} value={new Date().getFullYear() - i}>
                      {new Date().getFullYear() - i}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid2>
          </Grid2>
        </Box>

        <Divider />

        {/* Email address */}
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
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
        <Button variant="outlined" onClick={handleCancle}>
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
