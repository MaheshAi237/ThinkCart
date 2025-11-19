// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/thinkcart-logo.png";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          <img src={logo} alt="Thinkcart.ai logo" className="nav-logo" />
          <div className="nav-brand">
            <div className="nav-title">Thinkcart.ai</div>
            <div className="nav-sub">AI tools • Jobs • Data apps</div>
          </div>
        </div>
        <nav className="nav-links">
          <NavLink end to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>
          <NavLink
            to="/deals"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Deals
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Products
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Jobs
          </NavLink>
          <a
            href="https://www.reddit.com/r/ThinkcartAI"
            target="_blank"
            rel="noreferrer"
            className="nav-pill"
          >
            Reddit community →
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
