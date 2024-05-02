import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import {
  updateMinExperience,
  updateCompanyName,
  updateLocation,
  updateRemoteOnSite,
  updateTechStack,
  updateRole,
  updateMinBasePay,
} from "store/reducers/JobFilterSlice";

const JobListFilter = () => {
  const dispatch = useDispatch();
  const [formDataTemp, setFormDataTemp] = useState({
    minExperience: "",
    companyName: "",
    location: "",
    remoteOnSite: "",
    techStack: "",
    role: "",
    minBasePay: "",
  });

  const formData = useSelector((state) => state.jobFilter);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataTemp((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMinExperience(formDataTemp.minExperience));
    dispatch(updateCompanyName(formDataTemp.companyName));
    dispatch(updateLocation(formDataTemp.location));
    dispatch(updateRemoteOnSite(formDataTemp.remoteOnSite));
    dispatch(updateTechStack(formDataTemp.techStack));
    dispatch(updateRole(formDataTemp.role));
    dispatch(updateMinBasePay(formDataTemp.minBasePay));
  };

  return (
    <Box
      style={{
        margin: "40px 0",
        width: "auto",
        borderRadius: "12px",
        padding: "16px",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
        background: "rgb(255, 255, 255)",
      }}
    >
      <form className="job-filter-form" onSubmit={handleSubmit}>
        <Box>
          <Typography
            variant="subtitle1"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Min experience
          </Typography>
          <Select
            fullWidth
            style={{ height: "37px", width: "100%" }}
            name="minExperience"
            value={formDataTemp.minExperience}
            onChange={handleChange}
          >
            <MenuItem value={0}>Any</MenuItem>
            <MenuItem value={1}>1 year</MenuItem>
            <MenuItem value={2}>2 years</MenuItem>
            <MenuItem value={3}>3 years</MenuItem>
          </Select>
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Company name
          </Typography>
          <input
            style={{
              width: "100%",
              padding: "8px",
              height: "37px",
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.27)",
              borderRadius: "5px",
            }}
            type="text"
            id="companyName"
            name="companyName"
            value={formDataTemp.companyName}
            onChange={handleChange}
          />
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Location
          </Typography>
          <input
            style={{
              width: "100%",
              padding: "8px",
              height: "37px",
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.27)",
              borderRadius: "5px",
            }}
            type="text"
            id="location"
            name="location"
            value={formDataTemp.location}
            onChange={handleChange}
          />
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Remote/on-site
          </Typography>
          <Select
            fullWidth
            style={{ height: "37px", width: "100%" }}
            name="remoteOnSite"
            value={formDataTemp.remoteOnSite}
            onChange={handleChange}
          >
            <MenuItem value={"Remote"}>Remote</MenuItem>
            <MenuItem value={"On-site"}>On-site</MenuItem>
          </Select>
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Tech stack
          </Typography>
          <input
            style={{
              width: "100%",
              padding: "8px",
              height: "37px",
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.27)",
              borderRadius: "5px",
            }}
            type="text"
            id="techStack"
            name="techStack"
            value={formDataTemp.techStack}
            onChange={handleChange}
          />
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Role
          </Typography>
          <Select
            fullWidth
            style={{ height: "37px", MaxWidth: "100%" }}
            name="role"
            value={formDataTemp.role}
            onChange={handleChange}
          >
            <MenuItem value={"Backend"}>Backend</MenuItem>
            <MenuItem value={"Frontend"}>Frontend</MenuItem>
            <MenuItem value={"Full Stack"}>Full Stack</MenuItem>
          </Select>
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Min base pay
          </Typography>
          <input
            style={{
              width: "100%",
              padding: "8px",
              height: "37px",
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.27)",
              borderRadius: "5px",
            }}
            type="text"
            id="minBasePay"
            name="minBasePay"
            value={formDataTemp.minBasePay}
            onChange={handleChange}
          />
        </Box>

        <Box textAlign="right">
          <Button
            variant="contained"
            type="submit"
            style={{
              textTransform: "capitalize",
              borderRadius: "10px",
              background: "rgb(85, 239, 196)",
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

export default JobListFilter;
