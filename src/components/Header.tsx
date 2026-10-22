import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X, ArrowRight, Clock, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { companyData } from "../data/company";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Bar (Desktop only) */}
      <div className="hidden lg:block bg-forest text-ivory text-xs border-b border-forest-600/50 py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-ivory/80">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>{companyData.registeredOffice.fullAddress}</span>
            </span>
            <span className="flex items-center gap-1.5 text-ivory/80">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>{companyData.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-ivory/70 text-[11px] font-medium tracking-wide">
              Company No: <strong className="text-white font-mono">{companyData.companyNumber}</strong> (Active)
            </span>
            <span className="h-3 w-px bg-forest-600"></span>
            <a
              href={`tel:${companyData.contact.phoneTel}`}
              className="flex items-center gap-1.5 font-semibold text-gold-light hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{companyData.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-card border-b border-forest/10 py-3"
            : "bg-ivory border-b border-forest/5 py-4 lg:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium tracking-wide transition-colors relative rounded-sm ${
                    isActive
                      ? "text-forest font-semibold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-gold"
                      : "text-charcoal-muted hover:text-forest hover:bg-forest/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions: Phone Link & Request Quote CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${companyData.contact.phoneTel}`}
              className="hidden xl:flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-600 transition-colors py-2 px-3 rounded-sm hover:bg-forest/5"
              aria-label={`Call GOBIQ LTD on ${companyData.contact.phoneDisplay}`}
            >
              <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                <Phone className="w-4 h-4 text-forest" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] uppercase font-semibold text-charcoal-muted">Direct Line</span>
                <span className="font-semibold">{companyData.contact.phoneDisplay}</span>
              </div>
            </a>

            <Button to="/contact" size="sm" variant="primary" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${companyData.contact.phoneTel}`}
              className="p-2 text-forest hover:bg-forest/5 rounded-sm"
              aria-label="Call direct line"
            >
              <Phone className="w-5 h-5 text-forest" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-forest hover:bg-forest/5 rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-ivory shadow-elevated flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Top of Drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-forest/10">
                <Logo showSubtitle={false} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:bg-forest/5 rounded-sm"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="py-6 flex flex-col space-y-1" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-sm text-base font-medium transition-colors ${
                        isActive
                          ? "bg-forest text-white font-semibold"
                          : "text-charcoal hover:bg-forest/5 hover:text-forest"
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </nav>

              <div className="pt-2">
                <Button to="/contact" variant="primary" size="md" className="w-full text-center">
                  Request a Quote
                </Button>
              </div>
            </div>

            {/* Bottom info in mobile drawer */}
            <div className="pt-8 border-t border-forest/10 text-xs text-charcoal-muted space-y-3">
              <div>
                <p className="font-semibold text-charcoal">Registered Office:</p>
                <p>{companyData.registeredOffice.fullAddress}</p>
                <p className="font-mono text-[11px] text-forest mt-1">Company No: {companyData.companyNumber}</p>
              </div>
              <div className="space-y-1">
                <a
                  href={`tel:${companyData.contact.phoneTel}`}
                  className="flex items-center gap-2 font-semibold text-forest hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>{companyData.contact.phoneDisplay}</span>
                </a>
                <p className="text-[11px]">{companyData.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
