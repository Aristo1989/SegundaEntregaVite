import React from "react";
import "./Notfound.css";
import Notfound from "../Image/404.png";
import Notfound2 from "../Image/404.2.png";
import { useTheme } from "@mui/material/styles";

const NotFound = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <div className="not-found-container">
      <img
        src={isDarkMode ? Notfound2 : Notfound}
        alt="404 Not Found"
        className="not-found-image"
      />
    </div>
  );
};

export default NotFound;



