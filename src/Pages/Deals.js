import React from "react";

const Deals = () => {
  return (
    <section className="hero-card">
      <div className="hero-left">
        <div className="badge">
          <span className="badge-dot" />
          Coming soon
        </div>

        <h1 className="hero-title">
          Curated <span>AI & SaaS deals</span>.
        </h1>

        <p className="hero-text">
          We're preparing a verified list of discounts and lifetime deals for 
          AI tools and SaaS products. Announcements will be made on Reddit first.
        </p>

        <div className="hero-actions">
          <a
            href="https://www.reddit.com/r/ThinkcartAI"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Join the Reddit community
          </a>
        </div>
      </div>
    </section>
  );
};

export default Deals;
