import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Phase 1: Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    // Phase 2: Fully unmount/hide component from DOM
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="preloader-spinner"></div>
      <div className="preloader-initials">EK</div>
    </div>
  );
};

export default Preloader;
