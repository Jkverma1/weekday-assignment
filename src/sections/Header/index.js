import React from "react";
import { Box } from "@mui/material";
import Navbar from "components/Navbar";

const Header = () => {
  const userName = "Anubhav";
  return (
    <Box>
      <Navbar userName={userName} />
    </Box>
  );
};

export default Header;
