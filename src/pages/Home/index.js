import React, { useState } from "react";
import { Box, Button, Link, Tab, Tabs, Typography } from "@mui/material";
import NoAppliedJob from "components/NoAppliedJob";
import SearchSalary from "components/SearchSalary";

const Home = () => {
  const [tabValue, setTabValue] = useState(0);
  const [appliedJobs, setAppliedJobs] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box padding=" 30px">
      <Box
        style={{
          background: "rgb(217, 254, 211)",
          minWidth: "300px",
          padding: "6px 20px",
          margin: "0 20px",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px",
        }}
      >
        <Typography variant="p">
          We, at Weekday, are creating a go-to hub for uncovering the real
          issues candidates should be aware of before joining a company.{" "}
          <Link
            href="https://www.weekday.works/companies-work-culture-database"
            target="_blank"
            color="inherit"
            fontWeight={500}
          >
            Access 150+ company reviews here
          </Link>
        </Typography>
      </Box>{" "}
      <Box display="flex" justifyContent="center">
        <Tabs value={tabValue} onChange={handleChange} indicatorColor="primary">
          <Tab
            style={{ color: "black", fontWeight: 400 }}
            label="Applied jobs"
          />
          <Tab
            style={{ color: "black", fontWeight: 400 }}
            label="Search jobs"
          />
        </Tabs>
      </Box>
      {tabValue === 0 && (
        <>
          {appliedJobs > 0 ? null : <NoAppliedJob />}
          <SearchSalary />
        </>
      )}
      {tabValue === 1 && (
        <Box>
          <Typography variant="body1">Search Jobs</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Home;
