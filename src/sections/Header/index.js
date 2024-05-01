import React from "react";
import { Box } from "@mui/material";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import SideForm from "components/SideForm";

const Header = () => {
  const FirstName = "Anubhav";
  const LastName = "CEO";

  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Sidebar userName={FirstName} />
      <Navbar userName={FirstName} />
      <SideForm firstName={FirstName} lastName={LastName} />
    </Box>
  );
};

export default Header;
