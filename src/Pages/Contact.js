// src/pages/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section className="hero-card">
      <div className="hero-left">
        <div className="badge">
          <span className="badge-dot" />
          Contact Thinkcart.ai
        </div>

        <h1 className="hero-title">
          Get in touch with the
          <span> Thinkcart.ai team.</span>
        </h1>

        <p className="hero-text">
          Whether you’re curious about our upcoming AI tools, job portal,
          products hub, or have general questions — feel free to reach out.  
          We're happy to connect with early users and collaborators.
        </p>

        <div className="hero-tags">
          <span className="tag">General inquiries</span>
          <span className="tag">Feedback & suggestions</span>
          <span className="tag">Partner with us</span>
        </div>

        <div className="contact-block">
          <p className="contact-label">📧 Email</p>
          <p className="contact-value">
            <a href="mailto:ThinkCart.ai@gmail.com">
              ThinkCart.ai@gmail.com
            </a>
          </p>

          <p className="contact-label">🧩 Reddit Community</p>
          <p className="contact-value">
            <a
              href="https://www.reddit.com/r/ThinkcartAI"
              target="_blank"
              rel="noreferrer"
            >
              reddit.com/r/ThinkcartAI →
            </a>
          </p>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
