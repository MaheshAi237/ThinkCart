// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Jobs from "./pages/Jobs";
import Deals from "./pages/Deals";
import Contact from "./pages/Contact";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
