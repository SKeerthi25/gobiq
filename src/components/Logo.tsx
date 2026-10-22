import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "",
  showSubtitle = true,
}) => {
  const isLight = variant === "light";

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded-sm transition-opacity hover:opacity-90 ${className}`}
      aria-label="GOBIQ LTD - Return to homepage"
    >
      {/* Architectural Geometric Icon */}
      <div
        className={`w-10 h-10 rounded-sm flex items-center justify-center transition-transform group-hover:scale-105 duration-300 ${
          isLight
            ? "bg-white text-forest border border-white/20"
            : "bg-forest text-white shadow-subtle"
        }`}
      >
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Horizontal transom */}
          <path
            d="M9 15H19"
            stroke="#C5A46D"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-heading font-extrabold text-xl tracking-tight leading-none ${
            isLight ? "text-white" : "text-forest"
          }`}
        >
          GOBIQ <span className="text-gold font-bold text-sm tracking-wider ml-0.5">LTD</span>
        </span>
        {showSubtitle && (
          <span
            className={`text-[10px] uppercase font-semibold tracking-widest mt-1 ${
              isLight ? "text-ivory/70" : "text-charcoal-muted"
            }`}
          >
            Domestic Construction
          </span>
        )}
      </div>
    </Link>
  );
};
