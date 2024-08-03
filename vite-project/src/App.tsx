import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./App.css";
import ExplorePage from "./pages/ExplorePage";
import CreatePage from "./pages/CreatePage";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#BBA3FF",
    },
    secondary: {
      main: "#A5EE79",
    },
  },
});

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
