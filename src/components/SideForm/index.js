import React, { useState } from "react";
import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import linkedinIcon from "assets/images/linkedin-logo.png";
import "assets/css/form.css";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useSidebar } from "context/SidebarProvider";
import EditIcon from "@mui/icons-material/Edit";

const SideForm = ({ firstName, lastName }) => {
  const { openLeft, setOpenLeft } = useSidebar();
  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    fixedSalary: "",
    variableSalary: "",
    stocksPerYear: "",
    expectedCashSalary: "",
    jobSwitchLikelihood: "",
    emailAddress: "",
    whatsappNumber: "",
    confidential: "",
    referrals: "",
    file: "",
  });

  const toggleSidebarLeft = () => {
    setOpenLeft(!openLeft);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const count = Object.values(formData).filter((value) => value !== "").length;

  return (
    <Box
      style={{
        height: "100vh",
        maxHeight: "100vh",
        overflow: "auto",
        width: openLeft ? "320px" : "105px",
        backgroundColor: "#bcfcea",
        boxSizing: "border-box",
        padding: "20px 15px",
        borderLeft: "1px solid rgba(0, 0, 0,0.1)",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: openLeft ? "space-between" : "center",
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
              position: openLeft ? "unset" : "absolute",
              right: "90px",
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
          {openLeft ? (
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
          ) : (
            <>
              <Avatar alt={firstName} src={""} />
            </>
          )}
        </Box>
        {openLeft ? (
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
            {count}/12 completed
          </Typography>
        ) : null}
      </Box>
      {openLeft ? (
        <>
          {/* form */}
          <Box style={{ marginTop: "20px" }}>
            <form onSubmit={handleSubmit}>
              <Typography variant="caption" gutterBottom>
                What do we call you?<span style={{ color: "red" }}>*</span>
              </Typography>
              <div className="grid grid-2auto">
                <div>
                  <Typography variant="subtitle2">First Name:</Typography>
                  <input
                    className="form-input"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Typography variant="subtitle2">Last Name:</Typography>
                  <input
                    className="form-input"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <Typography variant="caption" gutterBottom>
                What is your current salary (in LPA)?
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <div className="grid grid-3auto">
                <div>
                  <Typography variant="subtitle2">Fixed Salary:</Typography>
                  <input
                    className="form-input"
                    type="text"
                    id="fixedSalary"
                    name="fixedSalary"
                    value={formData.fixedSalary}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Typography variant="subtitle2">Variable Salary:</Typography>
                  <input
                    className="form-input"
                    type="text"
                    id="variableSalary"
                    name="variableSalary"
                    value={formData.variableSalary}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Typography variant="subtitle2">Stocks per year:</Typography>
                  <input
                    className="form-input"
                    type="text"
                    id="stocksPerYear"
                    name="stocksPerYear"
                    value={formData.stocksPerYear}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="margin-20">
                <Typography variant="caption" gutterBottom>
                  What is your expected cash salary (in LPA)?
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <input
                  className="form-input"
                  type="text"
                  id="expectedCashSalary"
                  name="expectedCashSalary"
                  value={formData.expectedCashSalary}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="margin-20">
                <Typography
                  className="grid-3auto"
                  variant="caption"
                  gutterBottom
                >
                  How likely are you to switch jobs?
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <input
                  className="form-input"
                  type="text"
                  id="expectedCashSalary"
                  name="expectedCashSalary"
                  value={formData.expectedCashSalary}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="margin-20">
                <Typography variant="caption" gutterBottom>
                  Email Address:
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <input
                  className="form-input"
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="margin-20">
                <Typography variant="caption" gutterBottom>
                  Whatsapp Number
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <input
                  className="form-input"
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="margin-20">
                <Typography variant="caption" gutterBottom>
                  Upload Resume:
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <div>
                  <label for="resume">
                    <Box className="form-upload-button" width="100%">
                      <Typography
                        variant="h5"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          columnGap: "5px",
                        }}
                      >
                        <CloudUploadOutlinedIcon style={{ width: "20px" }} />
                        Click to upload
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        Upload only .pdf or .doc files
                      </Typography>
                    </Box>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf, .doc"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    required
                  />
                  <span id="filename"></span>
                </div>
              </div>
              <div className="margin-20">
                <Typography variant="caption" gutterBottom>
                  How confidential do you want your job search to be?
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <div className="margin-5">
                  <input
                    type="radio"
                    id="confidential1"
                    name="confidential"
                    onChange={handleChange}
                  />
                  <Typography variant="caption" gutterBottom>
                    You can feature/promote my profile with Weekday
                  </Typography>
                  <br />
                  <input
                    type="radio"
                    id="confidential2"
                    name="confidential"
                    onChange={handleChange}
                  />
                  <Typography variant="caption" gutterBottom>
                    Allow only my referrer to know for reference checks
                  </Typography>
                  <br />
                  <input
                    type="radio"
                    id="confidential3"
                    name="confidential"
                    onChange={handleChange}
                  />
                  <Typography variant="caption" gutterBottom>
                    Completely confidential
                  </Typography>
                </div>
              </div>
              <div className="margin-20">
                <Typography variant="caption" gutterBottom>
                  Would you be open to giving referrals to other job-seekers in
                  your current company?
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <div className="margin-5">
                  <input
                    type="radio"
                    id="referrals1"
                    name="referrals"
                    onChange={handleChange}
                  />
                  <Typography variant="caption" gutterBottom>
                    Yes
                  </Typography>
                  <br />
                  <input
                    type="radio"
                    id="referrals2"
                    name="referrals"
                    onChange={handleChange}
                  />
                  <Typography variant="caption" gutterBottom>
                    No
                  </Typography>
                </div>
              </div>
            </form>
          </Box>
        </>
      ) : (
        <Divider
          style={{ margin: "24px 0", borderTopWidth: "3px", width: "100%" }}
        />
      )}
      {!openLeft && (
        <Typography
          variant="h6"
          fontSize={13}
          fontWeight={600}
          color="grey"
          textAlign="center"
          style={{ cursor: "pointer" }}
          onClick={toggleSidebarLeft}
          noWrap
        >
          <EditIcon />
          <br />
          Edit Profile
        </Typography>
      )}
    </Box>
  );
};

export default SideForm;
