import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IconArrowLeft,
  IconCamera,
  IconMessageCircle,
  IconTarget,
  IconScale,
  IconMoon,
  IconLock,
} from "@tabler/icons-react";

const FEATURES = [
  {
    Icon: IconCamera,
    heading: "Snap a photo, get instant estimates",
    body: "Send a photo of your meal and get calorie & macro estimates back in seconds.",
  },
  {
    Icon: IconMessageCircle,
    heading: "Works inside Telegram & WhatsApp",
    body: "No new app to install — it lives in a chat you already use every day.",
  },
  {
    Icon: IconTarget,
    heading: "Personalized daily targets",
    body: "Calorie targets based on the goals and activity level you set at signup.",
  },
  {
    Icon: IconScale,
    heading: "Simple weight tracking",
    body: "Log your weight and see your progress history over time.",
  },
  {
    Icon: IconMoon,
    heading: "A daily check-in",
    body: "It checks in once a day and adjusts to how your day's actually going.",
  },
  {
    Icon: IconLock,
    heading: "A private web dashboard",
    body: "Review your full history anytime, secured with a one-tap login.",
  },
];

const TrackAndThaw = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="project-hero" style={{ "--accent": "#F472B6" }}>
        <div className="section-inner">
          <Link to="/" className="back-link">
            <IconArrowLeft size={16} stroke={2} />
            Back to ThinkCart.ai
          </Link>

          <span className="product-badge project-badge">Private beta</span>

          <h1 className="project-title">Track&amp;Thaw</h1>
          <p className="project-tagline">The nutrition coach that lives in your chat.</p>

          <p className="project-lead">
            Snap a photo of your meal and get instant calorie tracking, personalized
            coaching, and daily accountability — right inside Telegram or WhatsApp.
            No app to download, no food database to search.
          </p>
        </div>
      </section>

      <section className="project-body">
        <div className="section-inner project-copy">
          <p className="founder-body">
            Most nutrition apps ask you to do the work: search a food database, log
            every ingredient, remember to check in. Track&amp;Thaw flips that. Send a
            photo of your meal in a chat you already use every day, and it does the
            rest — identifying what's on your plate, estimating calories and macros,
            and tracking your progress toward the goals you set at signup.
          </p>
          <p className="founder-body">
            It checks in with you once a day, keeps a running log you can review
            anytime on your personal dashboard, and adapts to how you actually eat —
            whether that's rice and dal or a protein shake. Built by ThinkCart.ai,
            currently in private beta ahead of a public launch on Telegram and
            WhatsApp.
          </p>
        </div>
      </section>

      <section className="products-section">
        <div className="section-inner">
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title">Everything you need, none of the busywork.</h2>

          <div className="why-grid project-feature-grid">
            {FEATURES.map(({ Icon, heading, body }) => (
              <div className="why-col" key={heading} style={{ "--accent": "#F472B6" }}>
                <div className="why-icon project-feature-icon">
                  <Icon size={22} stroke={1.75} />
                </div>
                <h3 className="why-heading">{heading}</h3>
                <p className="why-body project-feature-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-inner">
          <span className="section-label">GET INVOLVED</span>
          <h2 className="founder-heading">Interested in the private beta?</h2>
          <p className="founder-body">
            Track&amp;Thaw is currently in private beta ahead of a public launch on
            Telegram and WhatsApp. Reach out and we'll let you know when it opens up.
          </p>
          <a href="mailto:hello@thinkcart.ai" className="submit-btn project-cta">
            Get in touch →
          </a>
        </div>
      </section>
    </>
  );
};

export default TrackAndThaw;
