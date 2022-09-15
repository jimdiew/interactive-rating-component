import React from "react";
import { makeStyles } from "@mui/styles";
import "./interactive-rating/src/assets/css/index.css";

interface CardProps {
  isSubmitted: any;
}

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "hsl(213, 19%, 18%)",
    width: " 400px",
    height: "400px",
    borderRadius: "16px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "5%",
    padding: "30px",
    lineHeight: "1.6",
  },
}));
export default function card() {
  return <div className="box"></div>;
}
