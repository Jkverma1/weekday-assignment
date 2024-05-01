import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import linkedinIcon from "assets/images/linkedin-logo.png";

const SideForm = () => {
  const [openLeft, setOpenLeft] = useState(true);
  const count = 1;

  const toggleSidebarLeft = () => {
    setOpenLeft(!openLeft);
  };
  return (
    <Box
      style={{
        height: "100vh",
        maxHeight: "100vh",
        overflow: "auto",
        width: "320px",
        backgroundColor: "#bcfcea",
        boxSizing: "border-box",
        padding: "20px 10px 20px 25px",
        borderLeft: "1px solid rgba(0, 0, 0,0.1)",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
          }}
        >
          <IconButton
            style={{
              border: "2px solid white",
              backgroundColor: "rgb(217, 243, 235)",
              padding: "0px",
              borderRadius: "8px",
              margin: "0",
            }}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSidebarLeft}
            edge="end"
          >
            {openLeft ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
          <Typography
            variant="h6"
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
              fontSize: "16px",
              fontWeight: 600,
            }}
            color="black"
            noWrap
          >
            Your Profile
            <img
              style={{ marginTop: "-3px" }}
              src={linkedinIcon}
              width="16"
              alt="linkedin"
            />
          </Typography>
        </Box>
        <Typography
          variant="body2"
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "5px",
          }}
          color="green"
          noWrap
        >
          {count}/9 completed
        </Typography>
      </Box>
      {/* form */}
      <Box>

      </Box>
    </Box>
  );
};

export default SideForm;
