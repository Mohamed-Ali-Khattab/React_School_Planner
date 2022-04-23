import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: "0.5rem",
  },
  secondary: {
    backgroundColor: "#fff",
    "& .MuiButton-label": {
      color: "#fff",
    },
  },
  primary: {
    backgroundColor: "#fff",
    "& .MuiButton-label": {
      color: "#fff",
    },
  },
}));

export default function ActionButton(props) {
  const { color, children, onClick } = props;
  const classes = useStyles();

  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
}
