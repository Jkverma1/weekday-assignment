import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import logo from "assets/images/logo.png";
import smallLogo from "assets/images/logo-small.png";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useSidebar } from "context/SidebarProvider";

const Sidebar = ({ userName }) => {
  const { openRight, setOpenRight } = useSidebar();

  const toggleSidebarRight = () => {
    setOpenRight(!openRight);
  };
  return (
    <Box
      style={{
        height: "100vh",
        maxHeight: "100vh",
        overflow: "auto",
        width: openRight ? "240px" : "80px",
        boxSizing: "border-box",
        padding: "20px 10px 20px 25px",
        borderRight: "1px solid rgba(0, 0, 0,0.1)",
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
          <img
            src={openRight ? logo : smallLogo}
            alt="logo"
            width={openRight ? "130" : "44"}
          />
          <IconButton
            style={{
              border: "2px solid rgb(233, 235, 235)",
              padding: "0px",
              borderRadius: "8px",
              margin: "0",
              position: openRight ? "unset" : "absolute",
              left: 70,
              background: "white",
              zIndex: 2,
            }}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSidebarRight}
            edge="end"
          >
            {openRight ? (
              <ChevronLeft />
            ) : (
              <ChevronRight style={{ zIndex: 2 }} />
            )}
          </IconButton>
        </Box>
        <Divider style={{ margin: "24px 0" }} />
      </Box>
      <Typography
        variant="body1"
        style={{ textTransform: "uppercase", fontSize: "10px" }}
        noWrap
      >
        {openRight ? "Looking for a job" : "GET JOBS"}
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
              {openRight ? "My applied jobs" : ""}
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
              {openRight ? "Search jobs" : ""}
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
              {openRight ? "Search salary" : ""}
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
              <PersonAddAltIcon color="black" />
              {openRight ? "Ask for referral" : ""}
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider style={{ margin: "24px 0" }} />
      <Typography
        variant="body1"
        style={{ textTransform: "uppercase", fontSize: "10px" }}
        noWrap
      >
        {openRight ? "RECOMMEND AND EARN" : "REFER"}
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
              <ShareOutlinedIcon color="black" />
              {openRight ? "Refer this extension" : ""}
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: "25px",
        }}
      >
        <Avatar alt={userName} src={""} />
        {openRight ? (
          <Typography variant="body1" sx={{ marginLeft: "8px", color: "#000" }}>
            {userName}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default Sidebar;
