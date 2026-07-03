import React from "react";
import { IconBrain, IconMapPin, IconShieldCheck } from "@tabler/icons-react";
// EmailSignup is hidden for now until it's wired to a real backend — see
// src/components/EmailSignup.js. Re-add <EmailSignup /> here once it's live.

const PRODUCTS = [
  {
    key: "jobs",
    name: "ThinkCart Jobs",
    accent: "#64B5F6",
    badge: "Launching 2026",
    oneLiner: "AI-powered job portal for India + diaspora + global",
    features: ["Resume built for the JD", "Private career vault", "AI interview coach"],
  },
  {
    key: "milkroute",
    name: "MilkRoute",
    accent: "#2EC4B6",
    badge: "Launching 2026",
    oneLiner: "Hyperlocal milk delivery for India — WhatsApp-first",
    features: ["Vendor app for stock management", "2km delivery radius", "WhatsApp notifications"],
  },
  {
    key: "stocksense",
    name: "StockSense India",
    accent: "#7B7FE8",
    badge: "Launching 2029",
    oneLiner: "AI stock signal platform for NSE + BSE — signal first, launch when proven",
    features: ["BUY/SELL/HOLD signals", "Technical + fundamental analysis", "Accuracy dashboard"],
  },
];

const WHY_US = [
  {
    Icon: IconBrain,
    heading: "AI that reasons, not just recommends",
    body: "Every ThinkCart.ai product uses AI to explain its decisions — not just give outputs. You always understand why.",
  },
  {
    Icon: IconMapPin,
    heading: "Built for India first",
    body: "We design for India's infrastructure — UPI, WhatsApp, Tier 2 cities, limited bandwidth. Not US-first products retrofitted for India.",
  },
  {
    Icon: IconShieldCheck,
    heading: "Privacy by design",
    body: "Your data is yours. We don't sell it, we don't train on it, we don't share it. Private career vaults, encrypted journals, zero public profiles by default.",
  },
];

const Home = () => {
  return (
    <>
      <section className="hero-section" id="hero">
        <div className="hero-inner">
          <p className="eyebrow fade-in">COMING SOON · 2026</p>

          <h1 className="hero-headline fade-in fade-in-delay-1">
            Think bigger. Build faster. Ship smarter.
          </h1>

          <p className="hero-sub fade-in fade-in-delay-2">
            ThinkCart.ai is building a suite of AI-powered products for India and the
            world. Starting with tools that help people find jobs, manage deliveries,
            and make smarter investments.
          </p>

          <a href="#products" className="scroll-hint fade-in fade-in-delay-3">
            ↓ See what we're building
          </a>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-inner">
          <span className="section-label">PRODUCTS · LAUNCHING 2026–2029</span>
          <h2 className="section-title">Built for India. Built for the world.</h2>

          <div className="product-grid">
            {PRODUCTS.map((product) => (
              <div
                className="product-card"
                key={product.key}
                style={{ "--accent": product.accent }}
              >
                <span className="product-badge">{product.badge}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.oneLiner}</p>
                <ul className="product-features">
                  {product.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section" id="why">
        <div className="section-inner">
          <span className="section-label">WHY US</span>
          <h2 className="section-title">We build what others overlook.</h2>

          <div className="why-grid">
            {WHY_US.map(({ Icon, heading, body }) => (
              <div className="why-col" key={heading}>
                <div className="why-icon">
                  <Icon size={22} stroke={1.75} />
                </div>
                <h3 className="why-heading">{heading}</h3>
                <p className="why-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section" id="about">
        <div className="founder-inner">
          <span className="section-label">WHO WE ARE</span>
          <h2 className="founder-heading">
            Started with an idea. Building with intention.
          </h2>
          <p className="founder-body">
            ThinkCart.ai started with a simple frustration: most AI products are
            built for large markets with large budgets. We wanted to build for the
            person looking for their next job in Pune, the milk vendor in Nagpur
            trying to manage 80 customers, the retail investor in Hyderabad trying
            to make sense of the market. We are a small team building things that
            matter. Based in India. Thinking globally. Starting with you.
          </p>
          <span className="location-tag">
            🇮🇳 India-based · Building for 1.4 billion people and the global Indian
            diaspora
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
