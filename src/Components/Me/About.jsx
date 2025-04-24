import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../Detalles/DetallesCards.css";
import personalImage from "../image/personal.png";

const About = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const azulRey = "#05112E";
  const amarillo = "#f2c94c";
  const colorTitle = isLight ? azulRey : amarillo;
  const colorBody = theme.palette.text.primary;

  return (
    <Box className="detalle-wrapper">
      <Box
        className="detalle-card"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          maxWidth: 750,
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={personalImage}
          alt="Personal"
          sx={{
            width: { xs: "100%", sm: 250 },
            height: "auto",
            borderRadius: 2,
            objectFit: "cover",
            mb: { xs: 2, sm: 0 },
          }}
        />

        <Box className="detalle-info">
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 1, color: `${colorTitle} !important` }}
          >
            Desarrollador de la API
          </Typography>

          <Typography variant="body1" sx={{ color: colorBody, mb: 0.5 }}>
            <Box
              component="span"
              sx={{ color: colorTitle, fontWeight: "bold", mr: 0.5 }}
            >
              Nombre:
            </Box>
            Cristian Aristizabal
          </Typography>

          <Typography variant="body1" sx={{ color: colorBody, mb: 0.5 }}>
            <Box
              component="span"
              sx={{ color: colorTitle, fontWeight: "bold", mr: 0.5 }}
            >
              Curso:
            </Box>
            Programación Web
          </Typography>

          <Typography variant="body1" sx={{ color: colorBody }}>
            <Box
              component="span"
              sx={{ color: colorTitle, fontWeight: "bold", mr: 0.5 }}
            >
              Edad:
            </Box>
            21
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

