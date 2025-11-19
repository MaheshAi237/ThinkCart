// src/pages/Home.js
import React from "react";

const Home = () => {
  return (
    <section className="hero-card">
      <div className="hero-left">
        <div className="badge">
          <span className="badge-dot" />
          Thinkcart.ai is coming soon
        </div>

        <h1 className="hero-title">
          We’re building an ecosystem of
          <span> AI products, job portals & data chatbots.</span>
        </h1>

        <p className="hero-text">
          Thinkcart.ai will be the central hub for discovering AI tools,
          exploring curated tech jobs, and talking to your data through
          intelligent chatbots. We’re in build mode right now and sharing
          early updates with our Reddit community.
        </p>

        <div className="hero-tags">
          <span className="tag">AI tools marketplace</span>
          <span className="tag">Job portal for AI & tech</span>
          <span className="tag">Chat with your data</span>
          <span className="tag">Workflow integrations</span>
        </div>

        <div className="hero-actions">
          <a
            href="https://www.reddit.com/r/ThinkcartAI"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Join the Reddit community
          </a>
          <a
            href="mailto:support@thinkcart.ai?subject=Early%20access%20to%20Thinkcart.ai"
            className="btn-ghost"
          >
            Request early access →
          </a>
        </div>
      </div>

      <aside className="hero-right">
        <h2 className="panel-title">What’s coming at Thinkcart.ai</h2>
        <ul className="timeline">
          <li className="timeline-item">
            <p className="timeline-label">Phase 1 · Deals</p>
            <p className="timeline-text">
              Curated AI & SaaS deals at <strong>deals.thinkcart.ai</strong>.
            </p>
            <span className="timeline-tag">Private beta</span>
          </li>
          <li className="timeline-item">
            <p className="timeline-label">Phase 2 · Products</p>
            <p className="timeline-text">
              A clean explorer for useful AI tools at{" "}
              <strong>products.thinkcart.ai</strong>.
            </p>
            <span className="timeline-tag">Coming soon</span>
          </li>
          <li className="timeline-item">
            <p className="timeline-label">Phase 3 · Jobs & Data</p>
            <p className="timeline-text">
              AI-focused job portal and “talk to your database” chatbots at{" "}
              <strong>jobs.thinkcart.ai</strong> and beyond.
            </p>
            <span className="timeline-tag">In design</span>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default Home;
