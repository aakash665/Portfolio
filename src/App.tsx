import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import LanguageContextProvider from "./context/language-context";

function cApp() {
  return (
    <>
      <h2>Trying out new design.... Will be live soon <h2/>
    </>
  );
}

export default App;
