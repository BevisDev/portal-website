import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      color: "#ffffff",
      fontSize: "2rem",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      color: "#ffffff",
      fontSize: "1.5rem",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      color: "#ffffff",
      fontSize: "20px",
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      color: "#ffffff",
      fontSize: "18px",
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      color: "#ffffff",
      fontSize: "16px",
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      color: "#ffffff",
      fontSize: "14px",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            fontFamily: "'Poppins', sans-serif",
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              fontFamily: "'Poppins', sans-serif",
              borderColor: "white",
              borderRadius: "8px",
            },
            "&:hover fieldset": {
              fontFamily: "'Poppins', sans-serif",
              borderColor: "lightblue",
            },
            "&.Mui-focused fieldset": {
              fontFamily: "'Poppins', sans-serif",
              borderColor: "lightblue",
              borderWidth: "2px",
            },
          },
          "& .MuiInputBase-input": {
            fontFamily: "'Poppins', sans-serif",
            color: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
          color: "#ffffff",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;
