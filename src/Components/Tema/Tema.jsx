import React, { createContext, useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();
export const useThemeMode = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggleTheme = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "dark" ? "#001033" : "#ffffff",
            paper: mode === "dark" ? "#11172a" : "#800020"
          },
          warning: {

            main: mode === "dark" ? "#f2c94c" : "#05112E"
          },
          text: {
            primary: mode === "dark" ? "#ffffff" : "#000000" 
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};




