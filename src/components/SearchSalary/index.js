import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const SearchSalary = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    yearsOfExperience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      style={{
        marginTop: "40px",
        width: "auto",
        borderRadius: "12px",
        padding: "16px",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
        background: "rgb(255, 255, 255)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "20px",
          }}
          variant="h3"
          fontWeight={500}
          mb="24px"
        >
          <IconButton
            style={{ height: "40px", width: "40px" }}
            color="inherit"
            aria-label="open chatBox"
            edge="end"
          >
            <ChevronLeft />
          </IconButton>
          Search Salary
        </Typography>

        <IconButton
          style={{ height: "40px", width: "40px" }}
          color="inherit"
          aria-label="open chatBox"
          edge="end"
        >
          <ChevronRight />
        </IconButton>
      </div>

      <form className="search-salary-form" onSubmit={handleSubmit}>
        <Box>
          <Typography
            variant="subtitle1"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Search company name
          </Typography>
          <Select
            fullWidth
            style={{ height: "37px" }}
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          >
            <MenuItem value={"HSBC"}>HSBC</MenuItem>
            <MenuItem value={"Tata Consultancy Services"}>
              Tata Consultancy Services
            </MenuItem>
            <MenuItem value={"IBM"}>IBM</MenuItem>
          </Select>
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
            style={{ height: "37px" }}
            name="role"
            value={formData.role}
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
            Years of experience
          </Typography>
          <input
            style={{
              width: "100%",
              padding: "8px",
              height: "1.4375em",
              boxSizing: "content-box",
              border: "1px solid rgba(0, 0, 0, 0.27)",
              borderRadius: "5px",
            }}
            type="text"
            id="YearsOfExperience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            required
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

export default SearchSalary;
