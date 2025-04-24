import React from "react";
import { useTheme } from "@mui/material/styles";
import "./header.css";
import apiDark from "../image/api.png";
import apiLight from "../image/api(blanca).png";

const Header = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div className="header-fullscreen">
      <img
        src={isDark ? apiDark : apiLight}
        alt="Dragon Ball Banner"
        className="header-image"
      />
    </div>
  );
};

export default Header;




