import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ChatIcon from "assets/icons/ChatIcon";
import { useSidebar } from "context/SidebarProvider";

const Navbar = ({ userName }) => {
  const { openRight, openLeft } = useSidebar();
  return (
    <AppBar
      color="white"
      sx={{
        position: "unset",
        borderRadius: "10px",
        padding: "0px 30px",
        width: `calc(100% - ${openLeft ? "320px" : "80px"} - ${
          openRight ? "240px" : "80px"
        })`,
        maxHeight: "65px",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px",
        zIndex: 0,
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
