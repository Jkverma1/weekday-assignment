import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: theme.spacing(2),
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  title: {
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    marginTop: theme.spacing(1),
  },
}));

const JobCard = ({ data }) => {
  const classes = useStyles();
  const {
    jobRole,
    jobDetailsFromCompany,
    maxExp,
    minExp,
    salaryCurrencyCode,
    maxJdSalary,
  } = data;
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title} gutterBottom>
          {jobRole}
        </Typography>
        <div className={classes.details}>
          <Typography variant="p" gutterBottom>
            {showMore
              ? jobDetailsFromCompany
              : `${jobDetailsFromCompany
                  .split(" ")
                  .slice(0, 10)
                  .join(" ")} ...`}
          </Typography>
          {jobDetailsFromCompany.split(" ").length > 10 && (
            <Button onClick={handleShowMoreClick} color="primary" size="small">
              {showMore ? "Show Less" : "Show More"}
            </Button>
          )}
          <Typography
            display="flex"
            gap={1}
            alignItems="center"
            variant="caption"
            gutterBottom
          >
            <Typography variant="subtitle1" color="primary" fontWeight={500}>
              Experience:
            </Typography>
            {minExp} - {maxExp} years
          </Typography>
          <Typography
            display="flex"
            gap={1}
            alignItems="center"
            variant="caption"
            gutterBottom
          >
            <Typography variant="subtitle1" color="primary" fontWeight={500}>
              Salary:
            </Typography>
            {maxJdSalary}K {salaryCurrencyCode}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
