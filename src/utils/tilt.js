// Small hover-tilt effect for cards. Computes rotation from cursor position
// relative to the card center; resets cleanly by clearing the inline style
// so CSS (including the scroll-reveal transform) takes back over.
export function handleTiltMove(e, maxTilt = 7) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotateX = ((y / rect.height - 0.5) * -2 * maxTilt).toFixed(2);
  const rotateY = ((x / rect.width - 0.5) * 2 * maxTilt).toFixed(2);
  card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
}

export function handleTiltLeave(e) {
  e.currentTarget.style.transform = "";
}
