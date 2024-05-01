import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ChatIcon from "assets/icons/ChatIcon";

const Navbar = ({ userName }) => {
  return (
    <AppBar
      position="fixed"
      color="white"
      sx={{ borderRadius: "10px", padding: "0px 30px" }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          👋 {userName}
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton
          style={{
            background: "rgb(85, 239, 196)",
            height: "45px",
            width: "45px",
          }}
          color="inherit"
          aria-label="open chatBox"
          edge="end"
        >
          <ChatIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
