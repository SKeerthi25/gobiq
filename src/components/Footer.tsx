import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Building, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { companyData } from "../data/company";
import { servicesData } from "../data/services";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-ivory border-t border-forest-600/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-forest-600/40">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" />
            <p className="text-ivory/80 text-sm leading-relaxed max-w-sm">
              GOBIQ LTD delivers a considered approach to domestic building construction across the United Kingdom.
              Focused on quality craftsmanship, structural precision, and homes created for modern living.
            </p>
            <div className="p-3.5 bg-forest-600/50 rounded-sm border border-forest-600/70 text-xs space-y-1">
              <div className="flex items-center gap-2 text-gold-light font-semibold">
                <Building className="w-3.5 h-3.5 text-gold" />
                <span>Companies House Verified</span>
              </div>
              <p className="text-ivory/70">
                Company Number: <span className="font-mono text-white font-medium">{companyData.companyNumber}</span> (Active)
              </p>
              <p className="text-ivory/70">
                SIC 41202 — Construction of domestic buildings
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-gold-light">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-ivory/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ivory/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ivory/80 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-ivory/80 hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ivory/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-gold-light">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-ivory/80 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Registered Office & Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-gold-light">
              Contact &amp; Registered Office
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-ivory/80">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  {companyData.registeredOffice.addressLine1},<br />
                  {companyData.registeredOffice.city}, {companyData.registeredOffice.country},<br />
                  <strong className="text-white font-mono">{companyData.registeredOffice.postcode}</strong>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${companyData.contact.phoneTel}`}
                  className="text-white font-semibold hover:text-gold-light transition-colors"
                  aria-label={`Call telephone ${companyData.contact.phoneDisplay}`}
                >
                  {companyData.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-ivory/80 hover:text-white transition-colors break-all"
                  aria-label={`Email ${companyData.contact.email}`}
                >
                  {companyData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/60 gap-4">
          <p>
            &copy; {currentYear} {companyData.legalName}. All rights reserved. Registered in England &amp; Wales.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gold-light transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-forest-600"></span>
            <Link to="/cookies" className="hover:text-gold-light transition-colors">
              Cookie Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-forest-600"></span>
            <span>SIC 41202</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
