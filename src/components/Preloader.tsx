import React, { useState, useEffect } from "react";

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeAnim, setFadeAnim] = useState(false);

  useEffect(() => {
    // Start fading out shortly before the 2-second mark for a buttery transition
    const fadeTimer = setTimeout(() => {
      setFadeAnim(true);
    }, 1800);

    // Fully remove preloader at 2 seconds
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest text-ivory transition-opacity duration-500 ease-out ${
        fadeAnim ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading GOBIQ LTD"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <svg width="600" height="600" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#C5A46D" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="#C5A46D" strokeWidth="1" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="#C5A46D" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Animated Architectural Emblem */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center bg-forest-600/60 rounded-sm border border-gold/40 shadow-elevated">
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-white animate-pulse"
          >
            {/* Outer building gable */}
            <path
              d="M5 23V11L14 4L23 11V23H5Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Central structural plumb-line */}
            <path
              d="M14 4V23"
              stroke="#C5A46D"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Horizontal transom */}
            <path
              d="M9 15H19"
              stroke="#C5A46D"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Wordmark */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-white flex items-center gap-2">
          <span>GOBIQ</span>
          <span className="text-gold font-bold text-xl tracking-wider">LTD</span>
        </h1>

        <p className="text-xs uppercase font-semibold tracking-[0.25em] text-ivory/70 mt-2">
          Domestic Building Construction
        </p>

        {/* 2-Second Linear Progress Indicator */}
        <div className="w-48 h-0.5 bg-forest-600/80 rounded-full mt-8 overflow-hidden relative">
          <div
            className="h-full bg-gold rounded-full transition-all duration-[2000ms] ease-out"
            style={{
              width: fadeAnim ? "100%" : "95%",
              animation: "preloader-bar 2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          />
        </div>
      </div>
    </div>
  );
};
