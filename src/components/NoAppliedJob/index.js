import { Box, Button, Typography } from "@mui/material";
import NotFoundImg from "assets/images/404-no-job-applied.png";
import React from "react";

const NoAppliedJob = () => {
  return (
    <Box textAlign="center" mt="30px">
      <Typography variant="h3" fontWeight={300} color="#015368">
        You have not applied for any jobs yet.
      </Typography>
      <img
        style={{ width: "100%" }}
        src={NotFoundImg}
        alt="Applied job not found"
      />
      <Button variant="outlined" style={{ textTransform: "capitalize" }}>
        Apply for Jobs
      </Button>
    </Box>
  );
};

export default NoAppliedJob;
