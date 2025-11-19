// src/pages/Jobs.js
import React from "react";

const Jobs = () => {
  return (
    <section className="hero-card">
      <div className="hero-left">
        <div className="badge">
          <span className="badge-dot" />
          Jobs portal – coming soon
        </div>

        <h1 className="hero-title">
          A job board focused on
          <span> AI-first and modern tech roles.</span>
        </h1>

        <p className="hero-text">
          Thinkcart Jobs will highlight high-signal roles at companies that are
          actually building with AI – not generic copy/paste listings.
        </p>

        <div className="hero-tags">
          <span className="tag">AI & data roles</span>
          <span className="tag">Product & founder-track</span>
          <span className="tag">Remote-friendly filters</span>
          <span className="tag">Tech stack insights</span>
        </div>

        <div className="hero-actions">
          <a
            href="https://jobs.thinkcart.ai"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Go to jobs.thinkcart.ai
          </a>
          <a
            href="mailto:support@thinkcart.ai?subject=Hiring%20via%20Thinkcart%20Jobs"
            className="btn-ghost"
          >
            Post roles early →
          </a>
        </div>
      </div>

      <aside className="hero-right">
        <h2 className="panel-title">For hiring teams</h2>
        <ul className="timeline">
          <li className="timeline-item">
            <p className="timeline-text">
              If you want to list roles early on Thinkcart Jobs, reach out at{" "}
              <strong>support@thinkcart.ai</strong>.
            </p>
            <span className="timeline-tag">Early employer access</span>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default Jobs;
