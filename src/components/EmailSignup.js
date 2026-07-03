import React, { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// TODO: wire this up to Mailchimp or Resend once credentials are available.
// Mailchimp: POST to your audience via a serverless function (API keys must never
// live in client-side code). Resend: same — call their API from a backend route.
// This function is the single place to swap in that real request.
async function submitToWaitlist(email) {
  // Placeholder — no backend connected yet. Simulates a network call so the
  // UI/UX is fully wired and ready for a real integration.
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { ok: true, email };
}

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      await submitToWaitlist(email);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="form-note" role="status">
        You're on the ThinkCart.ai list. We'll reach out when we launch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="email-form">
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-label="Email address"
          required
        />
        <button type="submit" className="submit-btn" disabled={status === "submitting"}>
          {status === "submitting" ? "Submitting…" : "Notify me when we launch →"}
        </button>
      </div>
      {status === "error" && (
        <p className="form-note" style={{ color: "#F4A261" }}>
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
};

export default EmailSignup;
