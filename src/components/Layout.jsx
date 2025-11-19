// src/components/Layout.js
import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="app-root">
      <NavBar />
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        © {new Date().getFullYear()} Thinkcart.ai · AI tools • Jobs • Data apps
      </footer>
    </div>
  );
};

export default Layout;
