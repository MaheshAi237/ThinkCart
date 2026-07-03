import React from "react";

export const LogoMark = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className="logo-mark"
    role="img"
    aria-label="ThinkCart.ai"
  >
    <rect x="0" y="0" width="100" height="100" rx="12" fill="#1B3A6B" />
    <line x1="50" y1="30" x2="50" y2="50" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="3" />
    <line x1="50" y1="50" x2="50" y2="70" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="3" />
    <line x1="30" y1="50" x2="50" y2="50" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="3" />
    <line x1="50" y1="50" x2="70" y2="50" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="3" />
    <circle cx="25" cy="25" r="4.5" fill="#FFFFFF" fillOpacity="0.25" />
    <circle cx="50" cy="25" r="4.5" fill="#FFFFFF" fillOpacity="0.4" />
    <circle cx="75" cy="25" r="4.5" fill="#FFFFFF" fillOpacity="0.25" />
    <circle cx="25" cy="50" r="4.5" fill="#FFFFFF" fillOpacity="0.4" />
    <circle cx="50" cy="50" r="6.5" fill="#64B5F6" />
    <circle cx="75" cy="50" r="4.5" fill="#FFFFFF" fillOpacity="0.4" />
    <circle cx="25" cy="75" r="4.5" fill="#FFFFFF" fillOpacity="0.25" />
    <circle cx="50" cy="75" r="6" fill="#F4A261" />
    <circle cx="75" cy="75" r="4.5" fill="#FFFFFF" fillOpacity="0.25" />
  </svg>
);

const WORDMARK_COLORS = {
  dark: { thinkcart: "#FFFFFF", ai: "#64B5F6" },
  light: { thinkcart: "#112240", ai: "#1E6FAE" },
  ocean: { thinkcart: "#FFFFFF", ai: "#F4A261" },
};

const Logo = ({ variant = "dark", size = 32, showWordmark = true }) => {
  const colors = WORDMARK_COLORS[variant] || WORDMARK_COLORS.dark;
  return (
    <span className="logo-lockup">
      <LogoMark size={size} />
      {showWordmark && (
        <span className="logo-wordmark">
          <span style={{ color: colors.thinkcart }}>ThinkCart</span>
          <span style={{ color: colors.ai }}>.ai</span>
        </span>
      )}
    </span>
  );
};

export default Logo;
