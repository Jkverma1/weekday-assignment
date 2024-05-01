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
  },
});
