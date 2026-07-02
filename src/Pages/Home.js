import React from "react";

const FEATURES = [
  {
    icon: "🧠",
    tone: "indigo",
    title: "AI Product Directory",
    desc: "A curated library of AI tools that actually solve problems — no spam, no noisy listings.",
  },
  {
    icon: "💼",
    tone: "cyan",
    title: "AI & Tech Job Portal",
    desc: "Meaningful roles in AI and tech, hand-picked instead of scraped from everywhere.",
  },
  {
    icon: "💬",
    tone: "purple",
    title: "Data Chatbots",
    desc: "Intelligent chatbots that help you explore and understand data, fast.",
  },
];

const Home = () => {
  return (
    <>
      <section className="hero-card">
        <div className="hero-left">
          <div className="badge fade-in">
            <span className="badge-dot" />
            Thinkcart.ai is coming soon
          </div>

          <h1 className="hero-title fade-in fade-in-delay-1">
            We’re building an ecosystem of
            <span> AI products, job portals & data chatbots.</span>
          </h1>

          <p className="hero-text fade-in fade-in-delay-2">
            Thinkcart.ai will be the central hub for smart AI tools, curated job
            listings, and intelligent data chatbots. We’re currently building and
            sharing updates with our early Reddit community.
          </p>

          <div className="hero-actions fade-in fade-in-delay-3">
            <a
              href="https://www.reddit.com/r/ThinkcartAI"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Join the Reddit community
            </a>
          </div>

          <div className="roadmap fade-in fade-in-delay-4">
            <div className="roadmap-step active">
              <p className="roadmap-label">Now</p>
              <p className="roadmap-text">Building the core</p>
            </div>
            <div className="roadmap-step">
              <p className="roadmap-label">Next</p>
              <p className="roadmap-text">Early access</p>
            </div>
            <div className="roadmap-step">
              <p className="roadmap-label">Soon</p>
              <p className="roadmap-text">Public launch</p>
            </div>
          </div>
        </div>
      </section>

      <div className="feature-grid">
        {FEATURES.map((feature) => (
          <div className="feature-card fade-in" key={feature.title}>
            <div className={`feature-icon ${feature.tone}`}>{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
            <span className="feature-tag">Coming soon</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
