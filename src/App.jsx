import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { AboutMe } from "./components/sections/AboutMe";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Proyects } from "./components/sections/Proyects";
import { Grid, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Grid container sx={{ bgcolor: "#000" }}>
        <Grid size={12}>
          <Home />
        </Grid>
        <Grid size={12} sx={{ marginTop: "10vh" }}>
          <AboutMe />
        </Grid>
        <Grid size={12} sx={{ marginTop: "10vh" }}>
          <Education />
        </Grid>
        <Grid size={12} sx={{ marginTop: "80px" }}>
          <Proyects />
        </Grid>
        <Grid size={12}>
          <Contact />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
