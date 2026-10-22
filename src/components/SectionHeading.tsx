import React from "react";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full mb-3 ${
            isDark
              ? "bg-forest-600/80 text-gold-light border border-gold/30"
              : "bg-sage/40 text-forest border border-forest/10"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>

      {/* Subtle gold architectural divider */}
      <div
        className={`h-0.5 w-14 bg-gold my-4 ${
          isCenter ? "mx-auto" : "mr-auto"
        }`}
      />

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-ivory/80" : "text-charcoal-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
