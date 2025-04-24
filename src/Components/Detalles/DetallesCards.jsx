import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import "./DetallesCards.css";

const DetallesCards = () => {
  const { id } = useParams();
  const theme = useTheme();
  const [character, setCharacter] = useState(null);

  const isLight = theme.palette.mode === "light";
  const azulRey = "#05112E"; 
  const amarillo = "#f2c94c"; 

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://dragonball-api.com/api/characters/${id}`
        );
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    })();
  }, [id]);

  if (!character) {
    return (
      <Typography
        variant="h6"
        align="center"
        sx={{ color: theme.palette.text.primary, mt: 8 }}
      >
        Cargando personaje...
      </Typography>
    );
  }

  const colorTitle = isLight ? azulRey : amarillo;
  const colorBody = theme.palette.text.primary;

  return (
    <Box>
      <Box className="detalle-wrapper">
        <Box className="detalle-card">
          <Box className="detalle-img-section">
            <img
              src={character.image}
              alt={character.name}
              className="detalle-imagen"
            />
          </Box>
          <Box className="detalle-info">
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 1, color: `${colorTitle} !important` }}
            >
              {character.name}
            </Typography>

            {[
              ["Raza", character.race],
              ["Género", character.gender],
              ["Ki base", character.ki],
              ["Ki máximo", character.maxKi],
              ["Afiliación", character.affiliation],
            ].map(([label, val]) => (
              <Typography
                key={label}
                variant="body1"
                sx={{ color: colorBody, mb: 0.5 }}
              >
                <Box
                  component="span"
                  sx={{ color: colorTitle, fontWeight: "bold", mr: 0.5 }}
                >
                  {label}:
                </Box>
                {val}
              </Typography>
            ))}

            {character.description && (
              <Typography variant="body1" sx={{ mt: 1, color: colorBody }}>
                <Box
                  component="span"
                  sx={{ color: colorTitle, fontWeight: "bold", mr: 0.5 }}
                >
                  Descripción:
                </Box>
                {character.description}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      <Box className="transformaciones-container">
        <Typography
          variant="h5"
          sx={{ color: colorTitle, textAlign: "center", mb: 2 }}
        >
          Transformaciones
        </Typography>

        {character.transformations?.length > 0 ? (
          <Box className="transformaciones-grid">
            {character.transformations.map((trans) => (
              <Box
                key={trans.id}
                className="transformacion-card"
                sx={{ backgroundColor: theme.palette.background.paper }}
              >
                <img
                  src={trans.image}
                  alt={trans.name}
                  className="transformacion-imagen"
                />
                <Typography
                  variant="subtitle1"
                  sx={{ color: colorTitle, mb: 1 }}
                >
                  {trans.name}
                </Typography>
                <Typography variant="body2" sx={{ color: colorBody, mb: 0.5 }}>
                  <strong>Ki:</strong> {trans.ki}
                </Typography>
                {trans.description && (
                  <Typography variant="body2" sx={{ color: colorBody }}>
                    {trans.description}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        ) : (
          <Typography
            variant="body1"
            align="center"
            sx={{ color: colorBody, mt: 1 }}
          >
            Este personaje no tiene transformaciones disponibles.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default DetallesCards;



















