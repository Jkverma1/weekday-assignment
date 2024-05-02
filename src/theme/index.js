import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(85, 239, 196)",
    },
    white: {
      main: "#fff",
    },
    black: {
      main: "#000",
    },
    red: {
      main: "red",
    },
    grey: {
      main: "#f2f2f266",
    },
  },
  typography: {
    body1: {
      color: "rgb(117, 117, 117)",
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    body2: {
      fontSize: "13px",
      color: "#45c755",
      opacity: 0.87,
      fontWeight: 500,
    },
    caption: {
      fontSize: "13px",
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: 300,
      lineHeight: "1rem",
    },
    subtitle2: {
      fontSize: "0.6875rem",
      fontWeight: 500,
    },
    p: {
      fontFamily: "Roboto",
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: "14px",
    },
    h3: {
      fontSize: "1.5em",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
});
