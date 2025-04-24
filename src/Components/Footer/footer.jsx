import React from "react";
import { Box } from "@mui/material";
import footerImage from "../Image/footer.png";
import { useTheme } from "@mui/material/styles";
import "./footer.css";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        py: 3,
      }}
    >
      <Box display="flex" justifyContent="center">
        <img
          src={footerImage}
          alt="Footer"
          style={{ maxHeight: 300, width: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default Footer;

