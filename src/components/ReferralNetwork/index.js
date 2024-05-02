import { Box, Button, Typography } from "@mui/material";
import InfiniteScrollTable from "components/JobListTable";
import React from "react";

const ReferralNetwork = () => {
  const formData = {};
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <Box
      style={{
        marginTop: "40px",
        width: "auto",
        borderRadius: "12px",
        padding: "16px 52px 16px 16px",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
        background: "rgb(255, 255, 255)",
      }}
    >
      <div>
        <Typography variant="h3" fontWeight={500} mb="24px">
          Ask for referral from any company
        </Typography>
      </div>

      <form onSubmit={handleSubmit}>
        <Box
          style={{
            display: "flex",
            width: "100%",
            borderRadius: "90px",
            border: "1px solid rgb(230, 230, 230)",
            boxShadow: "rgba(6, 6, 6, 0.06) 0px 2px 10px",
            boxSizing: "content-box",
          }}
        >
          <input
            style={{
              width: "100%",
              fontSize: "1rem",
              padding: "0.375rem 0px",
              border: "none",
              outline: "none",
            }}
            type="text"
            id="YearsOfExperience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            type="submit"
            style={{
              background: "rgb(0, 0, 0)",
              color: "rgb(255, 255, 255)",
              borderRadius: "90px",
              padding: "5px 15px",
              textTransform: "capitalize",
              fontSize: "16px",
            }}
          >
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ReferralNetwork;
