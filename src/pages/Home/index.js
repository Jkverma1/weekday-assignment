import React, { useState, useEffect } from "react";
import { Box, Link, Tab, Tabs, Typography } from "@mui/material";
import NoAppliedJob from "components/NoAppliedJob";
import SearchSalary from "components/SearchSalary";
import ReferralNetwork from "components/ReferralNetwork";
import JobListTable from "components/JobListTable";
import axios from "axios";
import JobListFilter from "components/JobListFilter";

const Home = () => {
  const [tabValue, setTabValue] = useState(0);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        { limit: 10, offset: 0 },
        { headers: { "Content-Type": "application/json" } }
      );
      setAppliedJobs(response.data.jdList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Box padding="30px">
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
          {appliedJobs.length > 0 ? (
            <>
              <JobListFilter />
              <JobListTable data={appliedJobs} />
            </>
          ) : (
            <NoAppliedJob />
          )}
          <SearchSalary />
          <ReferralNetwork />
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
