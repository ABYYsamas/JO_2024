import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Boutiqueoffcielles from "./Boutiqueoffcielles";
import Faq from "./Faq";
import SitesdeCompétition from "./SitesdeCompétition";
import Carte from "./Carte";
import "./JO.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Boutiqueoffcielles" element={<Boutiqueoffcielles />} />
        <Route path="/FAQ" element={<Faq />} />
        <Route path="/sitesdeCompétition" element={<SitesdeCompétition />} />
        <Route path="/Carte" element={<Carte />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
