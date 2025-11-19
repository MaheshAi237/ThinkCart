import React from "react";

const Jobs = () => {
  return (
    <section className="hero-card">
      <div className="hero-left">
        <div className="badge">
          <span className="badge-dot" />
          Coming soon
        </div>

        <h1 className="hero-title">
          A modern job platform for 
          <span> AI & tech roles.</span>
        </h1>

        <p className="hero-text">
          We're building a curated job portal focused on meaningful AI & tech 
          roles — not generic listings. Stay updated through our Reddit community.
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

export default Jobs;
