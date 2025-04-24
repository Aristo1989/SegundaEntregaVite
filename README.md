
<p align="center">

# Dragon Ball Api

</p>

<p align="center">

  ![Vista Prin](https://i.blogs.es/04ac6a/2560_3000/1366_2000.jpeg)

</p>

Una aplicación web interactiva hecha con React que muestra personajes del universo Dragon Ball utilizando la [API oficial de Dragon Ball](https://web.dragonball-api.com/). Incluye búsqueda, filtrado por género, cambio de tema entre "Claro" y "Oscuro" usa el de tu preferencia y  por ultimo y no menos importante, vista de detalles de cada personaje.


---

## Herramientas utilizadas

-  React
-  Material UI (MUI)
-  Framer Motion (para animaciones)
-  React Router DOM
-  API externa: [dragonball-api.com](https://web.dragonball-api.com/)

---

##  Características principales

-  Enseña la lista completa de los personajes
- Búsqueda por nombre
- Filtro por género (Todos / Hombres / Mujeres)
- Animaciones de entrada y hover
- Diseño responsivo (desktop, tablet y móvil)
- Vista detallada con transformaciones del personaje
- Navegación con barra fija
- Footer personalizado con imagen
- Cambio del estilo entre tema "Claro" y "Oscuro"

---

## Capturas de funcionalidad
<p align="center">
  <strong>Diseño del apartado principal en tono "Oscuro"</strong>
</p>

<p align="center">

  ![Vista Oscuro](https://github.com/Aristo1989/SegundaEntregaVite/blob/cf7f5a3c8ea626712deebdda46edd588415c6899/src/Components/image/Capturas/principalO.png)

</p>


<p align="center">
  <strong>Diseño del apartado principal en tono "Claro"</strong>
</p>

<p align="center">

![Vista blanco](https://github.com/Aristo1989/SegundaEntregaVite/blob/cf7f5a3c8ea626712deebdda46edd588415c6899/src/Components/image/Capturas/principalB.png)

</p>


<p align="center">
  <strong>Diseño de tarjetas de personaje tema "Oscuro"</strong>
</p>

<p align="center">

![Vista oscurot](https://github.com/Aristo1989/SegundaEntregaVite/blob/23bdecb8f21629063a7f276bdfc1e146773d6f30/src/Components/image/Capturas/tarjetas.png)

</p>

<p align="center">
  <strong>Diseño de tarjetas de personaje tema "Claro"</strong>
</p>

<p align="center">

![Vista blancot](https://github.com/Aristo1989/SegundaEntregaVite/blob/23bdecb8f21629063a7f276bdfc1e146773d6f30/src/Components/image/Capturas/tarjetas2.png)

</p>

<p align="center">
  <strong>Diseño de especificaciones de personaje </strong>
</p>

<p align="center">

![Vista especificaciones](https://github.com/Aristo1989/SegundaEntregaVite/blob/23bdecb8f21629063a7f276bdfc1e146773d6f30/src/Components/image/Capturas/especificaciones.png)
</p>

<p align="center">
  <strong>Diseño de transformaciones de personaje </strong>
</p>

<p align="center">

![Vista transformacion](https://github.com/Aristo1989/SegundaEntregaVite/blob/23bdecb8f21629063a7f276bdfc1e146773d6f30/src/Components/image/Capturas/transformaciones.png)
</p>

<p align="center">
  <strong>Control de Error 404 </strong>
</p>

<p align="center">

![Vista error](https://github.com/Aristo1989/SegundaEntregaVite/blob/23bdecb8f21629063a7f276bdfc1e146773d6f30/src/Components/image/Capturas/error.png)
</p>

##  Vista Responsiva
<p align="center">
  <strong>Vista en Celular (iPhone SE 375 x 667) </strong>
</p>

<p align="center">

![Vista celular](https://github.com/Aristo1989/SegundaEntregaVite/blob/23bdecb8f21629063a7f276bdfc1e146773d6f30/src/Components/image/Capturas/Celular.png)
</p>

<p align="center">
  <strong>Vista en Tablet (iPad Air  820 x 1180) </strong>
</p>

<p align="center">

![Vista tablet](https://github.com/Aristo1989/SegundaEntregaVite/blob/23bdecb8f21629063a7f276bdfc1e146773d6f30/src/Components/image/Capturas/Tablet.png)
</p>

##  Descripcion de algunas funcionalidades

Mi aplicación permite alternar entre el modo claro y el modo oscuro gracias al uso del contexto de React junto con Material UI.

```
    const [modo, setModo] = useState("dark");
    
    const alternarTema = () =>
      setModo((anterior) => (anterior === "dark" ? "light" : "dark"));
  
   ```   

Con eso se genera dinámicamente un tema con createTheme:

 ```   

    const tema = createTheme({
      palette: {
        mode: modo,
        background: {
          default: modo === "dark" ? "#001033" : "#ffffff",
          paper: modo === "dark" ? "#11172a" : "#800020"
        },
        text: {
          primary: modo === "dark" ? "#ffffff" : "#000000"
        }
      }
    });
  
   ```   

Este proveedor se aplica globalmente para que toda la app use el tema seleccionado:

 ```   
    <ThemeProvider>
      <App />
    </ThemeProvider>

  ```   

Y desde cualquier componente se puede acceder al tema actual y al método para alternarlo:

 ```   
    const { modo, alternarTema } = useThemeMode();

 ```   


####  La barra de navegación (Navbar) cumple múltiples funciones esenciales:

- Cambiar entre tema claro y oscuro con un ícono personalizado.

```

    const { mode, toggleTheme } = useThemeMode();
    
    
    < IconButton color="inherit" onClick={toggleTheme}>
      < img src={esfera} alt={Toggle to ${mode === "dark" ? "light" : "dark"} mode} />
    </ IconButton>

```    

- Buscar personajes mediante una barra de búsqueda.

```

    import { InputBase } from "@mui/material";
    import SearchIcon from "@mui/icons-material/Search";
    import { styled } from "@mui/system";

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
    
    < SearchContainer>
      < SearchIconWrapper>
        < SearchIcon sx={{ fontSize: isMobile ? 20 : 24 }} />
      </ SearchIconWrapper>
      < StyledInput
        placeholder="Search character..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </ SearchContainer>
    
 ```   

- Filtrar personajes por género (Todos, Hombre, Mujer).
    
	 ```

    {[
      { key: "all", label: "Home" },
      { key: "male", label: "Male" },
      { key: "female", label: "Female" },
    ].map(({ key, label }) => (
      < Button
        key={key}
        variant="contained"
        onClick={() => handleFilterClick(key)}
        sx={{
          fontSize: isMobile ? "0.7rem" : "0.9rem",
          padding: isMobile ? "4px 8px" : "6px 12px",
          minWidth: isMobile ? 60 : 80,
          backgroundColor: buttonBg,
          color: buttonColor,
          "&:hover": { backgroundColor: buttonBg },
        }}
      >
        {label}
      </ Button>
    ))}
    
    ```

- Redirigir a una vista personalizada "About Me".
    
	```

    { { key: "about", label: "Me" } }.map...

    const handleFilterClick = (key) => {
      if (key === "about") {
        navigate("/about");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
      }
    };
    
    ```

- Adaptarse a pantallas móviles con diseño responsive.

  ```
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    
    < AppBar
      position={isHome ? "fixed" : isMobile ? "static" : "fixed"}
      sx={{ /* ... */ }}
    
      < Toolbar
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          px: isMobile ? 1 : 2,
          py: isMobile ? 1 : 0.5,
          gap: isMobile ? 1 : 0,
        }}
      
        {/* ... */}
      </ Toolbar>
    </ AppBar>

    ```

###  Acceso a proyecto en vercel
-  Proyecto: [linkVercel](https://web.dragonball-api.com/)

---