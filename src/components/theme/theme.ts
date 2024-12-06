import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      fontSize: "3rem",
      userSelect: "none",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      fontSize: "2rem",
      userSelect: "none",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      fontSize: "1.5rem",
      userSelect: "none",
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      fontSize: "20px",
      userSelect: "none",
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1rem",
      userSelect: "none",
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "14px",
      userSelect: "none",
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiDialog-root": {
            fontFamily: "'Poppins', sans-serif",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            fontFamily: "'Poppins', sans-serif",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              fontFamily: "'Poppins', sans-serif",
            },
            "&:hover fieldset": {
              fontFamily: "'Poppins', sans-serif",
            },
            "&.Mui-focused fieldset": {
              fontFamily: "'Poppins', sans-serif",
            },
          },
          "& .MuiInputBase-input": {
            fontFamily: "'Poppins', sans-serif",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },
  },
});

export default theme;
