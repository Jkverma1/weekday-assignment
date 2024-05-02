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
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const JobListTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const tableRef = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        { limit: 10, offset: (page - 1) * 10 },
        { headers: { "Content-Type": "application/json" } }
      );
      setData((prevData) => [...prevData, ...response.data.jdList]);
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
            <TableCell>Min Experience</TableCell>
            <TableCell>Max Experience</TableCell>
            <TableCell>Job Role</TableCell>
            <TableCell>Max Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.jdUid}>
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
                  Copy ID
                </Button>
              </TableCell>
              <TableCell>
                {" "}
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
              <TableCell>{row.minExp || "-"}</TableCell>
              <TableCell>{row.maxExp || "-"}</TableCell>
              <TableCell>{row.jobRole}</TableCell>
              <TableCell>{row.maxJdSalary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </TableContainer>
  );
};

export default JobListTable;
