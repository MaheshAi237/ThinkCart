// src/components/Layout.jsx
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="app-root" id="top">
      <NavBar />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
