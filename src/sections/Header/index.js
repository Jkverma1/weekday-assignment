import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Navbar from "components/Navbar";
import logo from "assets/images/logo.png";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const Header = () => {
  const userName = "Anubhav";
  const [openLeft, setOpenLeft] = useState(true);
  const [openRight, setOpenRight] = useState(true);

  const toggleSidebarLeft = () => {
    setOpenLeft(!openLeft);
  };

  const toggleSidebarRight = () => {
    setOpenRight(!openRight);
  };
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Box
        style={{
          height: "100vh",
          maxHeight: "100vh",
          overflow: "auto",
          width: "240px",
          boxSizing: "border-box",
          padding: "20px 10px 20px 25px",
        }}
      >
        <Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img src={logo} alt="logo" width="130" />
            <IconButton
              style={{
                border: "2px solid rgb(233, 235, 235)",
                padding: "0px",
                borderRadius: "8px",
                margin: "0",
              }}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleSidebarRight}
              edge="end"
            >
              {openRight ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </Box>
          <Divider style={{ margin: "24px 0" }} />
        </Box>
        <Typography
          variant="body1"
          style={{ textTransform: "uppercase", fontSize: "10px" }}
          noWrap
        >
          Looking for a job
        </Typography>
        <List
          style={{
            padding: "5px 0",
            rowGap: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ListItem button style={{ padding: 0 }}>
            <ListItemText>
              <Typography
                style={{ display: "flex", alignItems: "center", columnGap: 5 }}
                variant="body1"
                noWrap
              >
                <PersonOutlineIcon color="black" />
                My applied jobs
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button style={{ padding: 0 }}>
            <ListItemText>
              <Typography
                style={{ display: "flex", alignItems: "center", columnGap: 5 }}
                variant="body1"
                noWrap
              >
                <SearchIcon color="black" />
                Search jobs
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button style={{ padding: 0 }}>
            <ListItemText>
              <Typography
                style={{ display: "flex", alignItems: "center", columnGap: 5 }}
                variant="body1"
                noWrap
              >
                <CurrencyRupeeIcon color="black" />
                Search salary
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button style={{ padding: 0 }}>
            <ListItemText>
              <Typography
                style={{ display: "flex", alignItems: "center", columnGap: 5 }}
                variant="body1"
                noWrap
              >
                <PersonAddAltIcon
                  color="black"
                />
                Ask for referral
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>

      <Navbar userName={userName} />
      <Box style={{ height: "100vh", maxHeight: "100vh", overflow: "auto" }}>
        <List>
          <ListItem button>
            <ListItemText primary="Left Sidebar Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Left Sidebar Item 2" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Header;
