// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import TrackAndThaw from "./Pages/TrackAndThaw";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track-and-thaw" element={<TrackAndThaw />} />
      </Routes>
    </Layout>
  );
}

export default App;
