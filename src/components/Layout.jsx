// src/components/Layout.js
import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="app-root">
      <div className="bg-blobs" aria-hidden="true">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />
      </div>
      <NavBar />
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        © {new Date().getFullYear()} Thinkcart.ai · AI tools • Jobs • Data apps
      </footer>
    </div>
  );
};

export default Layout;
