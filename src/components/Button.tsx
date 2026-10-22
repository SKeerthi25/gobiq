import React from "react";
import { Link } from "react-router-dom";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "outline-white";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  icon,
  iconPosition = "right",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wide uppercase",
    md: "px-6 py-3 text-sm tracking-wide uppercase",
    lg: "px-8 py-4 text-base tracking-wide uppercase font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-forest text-white hover:bg-forest-600 focus-visible:outline-forest shadow-sm hover:shadow-card hover:-translate-y-0.5 border border-forest",
    secondary:
      "bg-transparent text-forest border border-forest/80 hover:bg-forest/5 focus-visible:outline-forest hover:-translate-y-0.5",
    gold:
      "bg-gold text-white hover:bg-gold-dark focus-visible:outline-gold shadow-sm hover:shadow-card hover:-translate-y-0.5 border border-gold",
    "outline-white":
      "bg-transparent text-white border border-white/60 hover:bg-white/10 hover:border-white focus-visible:outline-white hover:-translate-y-0.5",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2 inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {content}
    </button>
  );
};
