import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Boutiqueoffcielles from "./Boutiqueoffcielles";
import Faq from "./Faq";
import JO from "./JO.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Boutiqueoffcielles" element={<Boutiqueoffcielles />} />
        <Route path="/FAQ" element={<Faq />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
