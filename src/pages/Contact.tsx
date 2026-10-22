import React from "react";
import { Phone, Mail, MapPin, Building, Clock, ExternalLink } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { companyData } from "../data/company";

export const Contact: React.FC = () => {
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
                    <p className="text-sm font-medium text-charcoal mt-0.5">
                      {companyData.hours}
                    </p>
                    <p className="text-xs text-charcoal-muted">Closed Sundays &amp; UK Bank Holidays</p>
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
              <div className="p-4 bg-forest/5 border-b border-forest/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal">
                  <MapPin className="w-4 h-4 text-forest" />
                  <span>Office Location — Tipton, DY4 0EU</span>
                </div>
                <a
                  href="https://maps.google.com/?q=78+Toll+End+Road+Tipton+DY4+0EU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-forest hover:text-gold flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="aspect-[16/9] w-full bg-sage/20">
                <iframe
                  title="GOBIQ LTD Registered Office Location - 78 Toll End Road, Tipton, England, DY4 0EU"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.6877283431664!2d-2.057399323318255!3d52.53913077197026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709971bc1d8cfd%3A0xe6aa9be40d346ff0!2s78%20Toll%20End%20Rd%2C%20Tipton%20DY4%200EU%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-[1.05]"
                />
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
