// src/pages/Deals.js
import React from "react";

const Deals = () => {
  return (
    <section className="hero-card">
      <div className="hero-left">
        <div className="badge">
          <span className="badge-dot" />
          Deals portal lives on its own subdomain
        </div>

        <h1 className="hero-title">
          Curated <span>AI & SaaS deals</span> at deals.thinkcart.ai.
        </h1>

        <p className="hero-text">
          We’re refreshing the experience and hosting Thinkcart Deals on its
          own subdomain. You’ll find discounts, lifetime deals, and perks we
          would personally use.
        </p>

        <div className="hero-tags">
          <span className="tag">AI product launches</span>
          <span className="tag">Lifetime deals</span>
          <span className="tag">Tools we actually like</span>
        </div>

        <div className="hero-actions">
          <a
            href="https://deals.thinkcart.ai"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Go to deals.thinkcart.ai
          </a>
        </div>
      </div>

      <aside className="hero-right">
        <h2 className="panel-title">Heads up</h2>
        <ul className="timeline">
          <li className="timeline-item">
            <p className="timeline-text">
              The root site <strong>thinkcart.ai</strong> will now be the
              central hub for all products: deals, tools, jobs, and data apps.
            </p>
            <span className="timeline-tag">Central hub</span>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default Deals;
