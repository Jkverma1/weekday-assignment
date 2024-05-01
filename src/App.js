import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SystemRoutes from "router";
import "app.css";
import { ThemeProvider } from "@mui/material";
import GoogleFontLoader from "react-google-font-loader";
import { theme } from "theme";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import SideForm from "components/SideForm";
import { useSidebar } from "context/SidebarProvider";

const App = () => {
  const FirstName = "Anubhav";
  const LastName = "CEO";
  const { openRight, openLeft } = useSidebar();

  return (
    <ThemeProvider theme={theme}>
      <GoogleFontLoader
        fonts={[
          { font: "Roboto", weights: [400, 500, 600, 700] },
          { font: "Arial", weights: [400, 500, 600, 700] },
        ]}
      />
      <Router>
        <div style={{ display: "flex", width: "100%" }}>
          <Sidebar userName={FirstName} />
          <div
          className="mainContent"
            style={{
              width: `calc(100% - ${openLeft ? "320px" : "105px"} - ${
                openRight ? "240px" : "80px"
              })`,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Navbar userName={FirstName} />
            <SystemRoutes />
          </div>
          <SideForm firstName={FirstName} lastName={LastName} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
