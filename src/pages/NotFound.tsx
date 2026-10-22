import React from "react";
import { Home, Construction } from "lucide-react";
import { Button } from "../components/Button";
import { companyData } from "../data/company";

export const NotFound: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-forest-50 text-forest border border-forest/15 mx-auto flex items-center justify-center">
          <Construction className="w-8 h-8 text-gold" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
          Error 404 — Page Not Found
        </span>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal">
          We Couldn&apos;t Locate That Page
        </h1>

        <p className="text-charcoal-light text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          The page or building document you requested may have moved or is no longer available. Please use the navigation links below to return to our primary sections.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />} iconPosition="left">
            Return to Homepage
          </Button>
          <Button to="/services" variant="secondary" size="md">
            View Our Services
          </Button>
        </div>

        <div className="pt-8 border-t border-forest/10 text-xs text-charcoal-muted">
          <span>Need immediate assistance? Call our direct line: </span>
          <a href={`tel:${companyData.contact.phoneTel}`} className="font-semibold text-forest hover:underline">
            {companyData.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};
