import { Box, useTheme } from "@mui/material";

import PortfolioNavBar from "./components/PortfolioNavBar";
import Home from "./components/sections/Home";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Skills from "./components/sections/Skills";
import Footer from "./components/sections/Footer";

function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.bgcolor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PortfolioNavBar />
      <Box
        sx={{
          width:'100%',
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt:'120px',
          gap:0
        }}
      >
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer/>
      </Box>
    </Box>
  );
}

export default App;
