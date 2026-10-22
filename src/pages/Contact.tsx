import React, { useState } from "react";
import { Phone, Mail, MapPin, Building, Clock, ExternalLink } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { companyData } from "../data/company";

export const Contact: React.FC = () => {
  const [mapProvider, setMapProvider] = useState<"google" | "osm">("google");

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* =========================================================================
          CONTACT HERO SECTION
          ========================================================================= */}
      <section className="bg-white border-b border-forest/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-sage/40 text-forest border border-forest/10">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
              <span>Direct Enquiries &amp; Consultations</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-tight">
              Contact GOBIQ LTD
            </h1>

            <div className="w-16 h-1 bg-gold rounded-full" />

            <p className="text-lg sm:text-xl text-charcoal-light leading-relaxed">
              We welcome enquiries from homeowners, architects, and developers across Tipton, Birmingham, the West Midlands, and surrounding counties.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TWO-COLUMN CONTACT SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Verified Contact Information & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-forest/10 shadow-card space-y-6">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal border-b border-forest/10 pb-4">
                Registered Office &amp; Details
              </h2>

              <ul className="space-y-5 text-sm">
                {/* Telephone */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-forest-50 text-forest flex items-center justify-center shrink-0 mt-0.5 border border-forest/10">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block">
                      Telephone / Mobile
                    </span>
                    <a
                      href={`tel:${companyData.contact.phoneTel}`}
                      className="text-base font-bold text-forest hover:text-gold transition-colors inline-block mt-0.5"
                    >
                      {companyData.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-charcoal-muted mt-0.5">Clickable on all devices</p>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-forest-50 text-forest flex items-center justify-center shrink-0 mt-0.5 border border-forest/10">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-base font-bold text-forest hover:text-gold transition-colors inline-block mt-0.5 break-all"
                    >
                      {companyData.contact.email}
                    </a>
                    <p className="text-xs text-charcoal-muted mt-0.5">Direct project inbox</p>
                  </div>
                </li>

                {/* Registered Office */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-forest-50 text-forest flex items-center justify-center shrink-0 mt-0.5 border border-forest/10">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block">
                      Registered Office
                    </span>
                    <p className="text-sm font-semibold text-charcoal mt-0.5 leading-snug">
                      {companyData.registeredOffice.addressLine1}
                      <br />
                      {companyData.registeredOffice.city}, {companyData.registeredOffice.country}
                      <br />
                      <strong className="font-mono text-forest">{companyData.registeredOffice.postcode}</strong>
                    </p>
                  </div>
                </li>

                {/* Office Hours */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-forest-50 text-forest flex items-center justify-center shrink-0 mt-0.5 border border-forest/10">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block">
                      Operating Hours
                    </span>
                    <p className="text-sm font-semibold text-charcoal mt-0.5">
                      {companyData.weekdaysHours}
                    </p>
                    <p className="text-sm font-semibold text-charcoal">
                      {companyData.weekendHours}
                    </p>
                    <p className="text-xs text-charcoal-muted mt-0.5">Weekend client consultations available</p>
                  </div>
                </li>
              </ul>

              {/* Companies House Verification Panel */}
              <div className="pt-4 border-t border-forest/10 bg-ivory p-4 rounded-sm border border-forest/10 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-forest">
                  <Building className="w-4 h-4 text-gold" />
                  <span>Companies House Verification</span>
                </div>
                <p className="text-charcoal-light">
                  Company Number: <strong className="font-mono text-charcoal font-bold">{companyData.companyNumber}</strong> (Active)
                </p>
                <p className="text-charcoal-muted">
                  SIC: 41202 — Construction of domestic buildings
                </p>
              </div>
            </div>

            {/* Interactive Map Embed for Registered Office (DY4 0EU, Tipton) */}
            <div className="bg-white rounded-sm border border-forest/10 shadow-card overflow-hidden">
              <div className="p-4 bg-forest/5 border-b border-forest/10 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal">
                  <MapPin className="w-4 h-4 text-forest" />
                  <span>Office Location — Tipton, DY4 0EU</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMapProvider(mapProvider === "google" ? "osm" : "google")}
                    className="text-[11px] font-semibold text-charcoal-muted hover:text-forest px-2 py-0.5 rounded border border-forest/10 hover:bg-white transition-colors"
                    title="Switch map view provider"
                  >
                    View: {mapProvider === "google" ? "OpenStreetMap" : "Google Maps"}
                  </button>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=78+Toll+End+Road,+Tipton,+DY4+0EU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-forest hover:text-gold flex items-center gap-1"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Map Iframe Container with explicit responsive height */}
              <div className="relative w-full h-72 sm:h-80 bg-ivory">
                {mapProvider === "google" ? (
                  <iframe
                    title="GOBIQ LTD Registered Office Location - 78 Toll End Road, Tipton, England, DY4 0EU"
                    src="https://maps.google.com/maps?q=78%20Toll%20End%20Road,%20Tipton,%20DY4%200EU,%20UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full block"
                  />
                ) : (
                  <iframe
                    title="GOBIQ LTD Registered Office on OpenStreetMap"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-2.0674%2C52.5341%2C-2.0474%2C52.5441&layer=mapnik&marker=52.5391%2C-2.0574"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="w-full h-full block"
                  />
                )}
              </div>

              {/* Bottom Quick Directions Strip */}
              <div className="p-3 bg-forest-50/60 border-t border-forest/10 flex items-center justify-between text-xs text-charcoal-muted">
                <span className="font-mono text-forest font-semibold">78 Toll End Rd, Tipton DY4 0EU</span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=78+Toll+End+Road,+Tipton,+DY4+0EU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest hover:underline flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
