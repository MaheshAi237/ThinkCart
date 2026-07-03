import React from "react";
import Logo from "./Logo";

const PRODUCT_LINKS = ["Jobs", "MilkRoute", "StockSense", "Studio"];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div>
          <Logo variant="ocean" size={30} />
          <p className="footer-tagline">An AI-first product company. India & global.</p>
        </div>

        <div>
          <p className="footer-col-title">Products</p>
          <ul className="footer-links">
            {PRODUCT_LINKS.map((name) => (
              <li key={name}>
                <span className="disabled">{name} · coming soon</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} ThinkCart Technologies Pvt. Ltd.</span>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>·</span>
          <span>Terms of Service</span>
          <span>·</span>
          <span>Made in India 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
