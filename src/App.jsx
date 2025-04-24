import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/header";
import CharacterCard from "./Components/Cards/CharacterCard";
import Footer from "./Components/Footer/footer";
import DetallesCards from "./Components/Detalles/DetallesCards";
import About from "./Components/Me/About";
import NotFound from "./Components/Notfound/Notfound";
import { Box, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./App.css";

function App() {
  const theme = useTheme();
  const [allCharacters, setAllCharacters] = useState([]);
  const [displayCharacters, setDisplayCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");

  const cardsRef = useRef(null);
  const footerRef = useRef(null);
  const TOTAL_CHARACTERS = 58;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://dragonball-api.com/api/characters?limit=${TOTAL_CHARACTERS}`
        );
        const data = await res.json();
        setAllCharacters(data.items);
        setDisplayCharacters(data.items);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
    filterCharacters(value, genderFilter);
  };

  const handleFilter = (gender) => {
    setGenderFilter(gender);
    filterCharacters(searchValue, gender);

    const offset = 80;
    if (cardsRef.current) {
      const top = cardsRef.current.getBoundingClientRect().top + window.scrollY - offset;
      const footerHeight = footerRef.current ? footerRef.current.offsetHeight : 0;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const maxScroll = scrollHeight - windowHeight - footerHeight;

      window.scrollTo({
        top: Math.min(top, maxScroll),
        behavior: "smooth",
      });
    }
  };

  const filterCharacters = (search, gender) => {
    let arr = [...allCharacters];
    if (gender !== "all") {
      arr = arr.filter((c) => c.gender.toLowerCase() === gender);
    }
    if (search.trim() !== "") {
      arr = arr.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setDisplayCharacters(arr);
  };

  return (
    <Router>
      <Box className="app-wrapper">
        <Navbar
          onSearch={handleSearch}
          onFilter={handleFilter}
          cardsRef={cardsRef}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div ref={cardsRef} className="character-list-section">
                  <Container maxWidth="xl">
                    <Grid container spacing={3} justifyContent="center" className="scroll-container">
                      {displayCharacters.map((char, i) => (
                        <Grid
                          item
                          key={`${char.id}-${i}`}
                          xs={12}
                          sm={6}
                          md={3}
                          lg={3}
                        >
                          <CharacterCard character={char} />
                        </Grid>
                      ))}
                    </Grid>
                    {isLoading && (
                      <Box className="loading-box">
                        <p>Cargando personajes...</p>
                      </Box>
                    )}
                  </Container>
                </div>
              </>
            }
          />
          <Route path="/character/:id" element={<DetallesCards />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Box component="footer" className="footer-wrapper" ref={footerRef}>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;











































