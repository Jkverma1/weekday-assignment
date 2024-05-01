import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ChatIcon from "assets/icons/ChatIcon";

const Navbar = ({ userName }) => {
  return (
    <AppBar
      color="white"
      sx={{
        position: "unset",
        borderRadius: "10px",
        padding: "0px 30px",
        width: "calc(100% - 320px - 240px)",
        maxHeight: "65px",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px",
      }}
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
