import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "./charactercard.css";

const CharacterCard = ({ character }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.getContrastText(theme.palette.background.paper),
    borderRadius: "16px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    minWidth: "250px",
    maxWidth: "260px",
    margin: "10px",
    height: "100%",
  };

  const imageStyle = {
    width: "100%",
    maxHeight: "280px",
    objectFit: "contain",
    marginBottom: "12px"
  };

  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <motion.div
      className={`character-card-wrapper ${theme.palette.mode}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      onClick={handleClick}
    >
      <Card sx={cardStyle} className="character-card">
        <img
          src={character.image}
          alt={character.name}
          style={imageStyle}
          className="character-image"
        />
        <CardContent sx={{ textAlign: "center", paddingBottom: "8px", width: "100%" }}>
          <Typography variant="h6" component="div" fontWeight="bold">
            {character.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#f2c94c" }}>
            {character.race} – {character.gender}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Base KI:</strong> {character.ki?.toLocaleString("es-ES") ?? "N/A"}
            <br />
            <strong>Total KI:</strong> {character.maxKi?.toLocaleString("es-ES") ?? "N/A"}
            <br />
            <strong>Affiliation:</strong> {character.affiliation ?? "Unknown"}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CharacterCard;






















