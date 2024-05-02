import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import JobCard from "components/JobCard";
import { useSelector } from "react-redux";

const JobListTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const tableRef = useRef();
  const [copiedId, setCopiedId] = useState(null);
  const formData = useSelector((state) => state.jobFilter);

  console.log(formData);

  useEffect(() => {
    fetchData();

    console.log(formData);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 5,
          offset: (page - 1) * 5,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const filteredData = response.data.jdList.filter((item) => {
        const {
          minExperience,
          companyName,
          location,
          techStack,
          role,
          minBasePay,
        } = formData;

        const hasFilter = Object.values(formData).some((value) => !!value);

        if (!hasFilter) {
          return true;
        }
        return (
          (!minExperience || item.experience >= minExperience) &&
          (!companyName || item.jobDetailsFromCompany.includes(companyName)) &&
          (!location || item.location.includes(location)) &&
          (!techStack || item.jobDetailsFromCompany.includes(techStack)) &&
          (!role || item.jobRole.includes(role)) &&
          (!minBasePay ||
            item.minJdSalary >= minBasePay ||
            item.minJdSalary === null)
        );
      });

      setData((prevData) => [...prevData, ...filteredData]);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = tableRef.current;
    if (scrollHeight - scrollTop === clientHeight && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [page]);

  const copyIdToClipboard = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 1000);
  };

  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: "400px", overflowY: "auto" }}
      onScroll={handleScroll}
      ref={tableRef}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Job Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={`${row.jdUid}-${index}`}>
              <TableCell>
                <Button
                  style={{
                    textTransform: "capitalize",
                    borderRadius: "10px",
                    background: "rgb(85, 239, 196)",
                    fontSize: "13px",
                    color: "white",
                    textWrap: "nowrap",
                  }}
                  onClick={() => copyIdToClipboard(row.jdUid)}
                >
                  {copiedId === row.jdUid ? "Copied" : "Copy ID"}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  style={{
                    textTransform: "capitalize",
                    borderRadius: "10px",
                    border: "1px solid rgb(85, 239, 196)",
                    fontSize: "13px",
                    color: "rgb(85, 239, 196)",
                    textWrap: "nowrap",
                  }}
                  onClick={() => window.open(row.jdLink, "_blank")}
                  startIcon={<OpenInNewIcon />}
                >
                  Job Link
                </Button>
              </TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell style={{ position: "relative" }}>
                <JobCard data={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loading && (
        <CircularProgress style={{ marginTop: "20px", marginLeft: "50%" }} />
      )}
      {error && (
        <Typography variant="body1" style={{ marginTop: "20px", color: "red" }}>
          Error: {error}
        </Typography>
      )}
    </TableContainer>
  );
};

export default JobListTable;
