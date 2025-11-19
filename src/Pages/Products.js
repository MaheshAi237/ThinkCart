// src/pages/Products.js
import React from "react";

const Products = () => {
  return (
    <section className="hero-card">
      <div className="hero-left">
        <div className="badge">
          <span className="badge-dot" />
          Products hub – coming soon
        </div>

        <h1 className="hero-title">
          Discover the smartest
          <span> AI products in one clean interface.</span>
        </h1>

        <p className="hero-text">
          We’re building a curated catalog of AI tools that actually help you
          ship work – from productivity and coding to growth, analytics, and
          automation. No spam, no low-quality listings.
        </p>

        <div className="hero-tags">
          <span className="tag">Curated AI tools</span>
          <span className="tag">Real use cases</span>
          <span className="tag">Save & compare</span>
          <span className="tag">Launch deals & perks</span>
        </div>

        <div className="hero-actions">
          <a
            href="https://products.thinkcart.ai"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Go to products.thinkcart.ai
          </a>
          <a
            href="https://www.reddit.com/r/ThinkcartAI"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Get notified on Reddit →
          </a>
        </div>
      </div>

      <aside className="hero-right">
        <h2 className="panel-title">Status</h2>
        <ul className="timeline">
          <li className="timeline-item">
            <p className="timeline-label">Design</p>
            <p className="timeline-text">
              Finalizing categories, tags, and search experience with early
              users.
            </p>
            <span className="timeline-tag">Designing</span>
          </li>
          <li className="timeline-item">
            <p className="timeline-label">Early access</p>
            <p className="timeline-text">
              First batch of invites will go to members of{" "}
              <strong>r/ThinkcartAI</strong>.
            </p>
            <span className="timeline-tag">Join community</span>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default Products;
