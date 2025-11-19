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
          Thinkcart.ai will be the central hub for smart AI tools, curated job
          listings, and intelligent data chatbots. We’re currently building and
          sharing updates with our early Reddit community.
        </p>

        {/* Remove all tags & buttons except Reddit CTA */}
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

      {/* Remove right panel entirely */}
    </section>
  );
};

export default Home;
