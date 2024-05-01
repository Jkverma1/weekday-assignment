import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SystemRoutes from "router";
import "app.css";
import { ThemeProvider } from "@mui/material";
import GoogleFontLoader from "react-google-font-loader";
import { theme } from "theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GoogleFontLoader
        fonts={[
          { font: "Roboto", weights: [400, 500, 600, 700] },
          { font: "Arial", weights: [400, 500, 600, 700] },
        ]}
      />
      <Router>
        <div className="App">
          <SystemRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
