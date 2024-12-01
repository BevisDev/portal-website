import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      color: "#ffffff",
      fontSize: "3rem",
      userSelect: "none",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      color: "#ffffff",
      fontSize: "2rem",
      userSelect: "none",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      color: "#ffffff",
      fontSize: "1.5rem",
      userSelect: "none",
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      color: "#ffffff",
      fontSize: "20px",
      userSelect: "none",
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      color: "#ffffff",
      fontSize: "1rem",
      userSelect: "none",
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      color: "#ffffff",
      fontSize: "14px",
      userSelect: "none",
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
  },
});

export default theme;
