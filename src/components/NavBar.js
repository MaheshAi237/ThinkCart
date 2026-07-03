import React, { useState } from "react";
import Logo from "./Logo";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#top" className="logo-lockup">
          <Logo variant="dark" size={32} />
        </a>

        <nav className="nav-links">
          <a href="#products" className="nav-link">
            Products
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          {/* "Join waitlist" CTA hidden until the signup form is wired to a
              real backend — see src/components/EmailSignup.js */}
          <button
            type="button"
            className="nav-hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {open && (
        <div className="nav-mobile-menu">
          <a href="#products" className="nav-link" onClick={() => setOpen(false)}>
            Products
          </a>
          <a href="#about" className="nav-link" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#contact" className="nav-link" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default NavBar;
