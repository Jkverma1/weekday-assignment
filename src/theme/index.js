import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    white: {
      main: "#fff",
    },
    black: {
      main: "#000",
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
      fontFamily: "Helvetica",
    },
  },
});
