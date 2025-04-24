import React from "react";
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useThemeMode } from "../Tema/Tema";
import "./navbar.css";
import titulo from "../image/titulo.png";
import esfera from "../image/esfera.png";

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "#ffffff22",
  "&:hover": { backgroundColor: "#ffffff33" },
  width: "100%",
  maxWidth: 300,
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")({
  padding: "0 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
});

const StyledInput = styled(InputBase)({
  color: "inherit",
  width: "100%",
  padding: "4px 6px",
  fontSize: "0.85rem",
});

const LogoImage = styled("img")(({ theme }) => ({
  height: 60,
  marginRight: 12,
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    height: 40,
    marginRight: 8,
  },
}));

const IconImage = styled("img")(({ theme }) => ({
  height: 40,
  width: 40,
  [theme.breakpoints.down("sm")]: {
    height: 32,
    width: 32,
  },
}));

const Navbar = ({ onSearch, onFilter, cardsRef }) => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const buttonBg = theme.palette.background.paper;
  const buttonColor = theme.palette.getContrastText(buttonBg);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterClick = (key) => {
    if (key === "about") {
      navigate("/about");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        onFilter(key);
        if (cardsRef?.current) {
          const offset = isMobile ? 140 : 80;
          const top =
            cardsRef.current.getBoundingClientRect().top +
            window.scrollY -
            offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <AppBar
      position={isHome ? "fixed" : isMobile ? "static" : "fixed"}
      sx={{
        backgroundColor: theme.palette.background.paper,
        zIndex: 1300,
        width: "100%",
        overflowX: "hidden",
        boxShadow: isMobile && !isHome ? "none" : "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "100vw",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          px: isMobile ? 1 : 2,
          py: isMobile ? 1 : 0.5,
          gap: isMobile ? 1 : 0,
        }}
      >

        <Box display="flex" alignItems="center" onClick={handleLogoClick}>
          <LogoImage src={titulo} alt="Dragon Ball Title" />
        </Box>


        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          justifyContent={isMobile ? "center" : "flex-end"}
          gap={1}
          width="100%"
          sx={{ pr: isMobile ? 0 : 2 }}
        >
          <IconButton color="inherit" onClick={toggleTheme}>
            <IconImage src={esfera} alt="Toggle Theme" />
          </IconButton>

          <SearchContainer>
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: isMobile ? 20 : 24 }} />
            </SearchIconWrapper>
            <StyledInput
              placeholder="Search character..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </SearchContainer>

          {[
            { key: "all", label: "Home" },
            { key: "male", label: "Male" },
            { key: "female", label: "Female" },
            { key: "about", label: "Me" },
          ].map(({ key, label }) => (
            <Button
              key={key}
              variant="contained"
              sx={{
                fontSize: isMobile ? "0.7rem" : "0.9rem",
                padding: isMobile ? "4px 8px" : "6px 12px",
                minWidth: isMobile ? 60 : 80,
                backgroundColor: buttonBg,
                color: buttonColor,
                "&:hover": {
                  backgroundColor: buttonBg,
                },
              }}
              onClick={() => handleFilterClick(key)}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



































