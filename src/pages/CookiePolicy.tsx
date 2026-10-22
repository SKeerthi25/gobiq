import React from "react";
import { Cookie, SlidersHorizontal, CheckCircle2 } from "lucide-react";
import { companyData } from "../data/company";

export const CookiePolicy: React.FC = () => {
  const openPreferences = () => {
    window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-forest/10 pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-sage/40 text-forest border border-forest/10">
            <Cookie className="w-4 h-4 text-gold" />
            <span>UK PECR Compliance</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Cookie Policy
          </h1>
          <p className="text-sm text-charcoal-muted">
            Last updated: October 2026 | Governing GOBIQ LTD Digital Services
          </p>
        </div>

        {/* Change Preferences Callout */}
        <div className="p-6 bg-forest-50/70 border border-forest/15 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-base text-charcoal">
              Manage Your Cookie Preferences
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              You can adjust or revoke your cookie choices at any time on this device.
            </p>
          </div>
          <button
            type="button"
            onClick={openPreferences}
            className="px-5 py-2.5 bg-forest text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-forest-600 transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <SlidersHorizontal className="w-4 h-4 text-gold" />
            <span>Open Preference Centre</span>
          </button>
        </div>

        {/* Policy Body */}
        <div className="space-y-10 text-sm sm:text-base text-charcoal-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your computer, smartphone, or tablet when you browse websites. They are widely used to allow web applications to function efficiently, maintain session states, enhance security, and remember visitor preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              2. How GOBIQ LTD Uses Cookies
            </h2>
            <p>
              We believe in minimal, privacy-first web design. We do not use third-party behavioral advertising trackers, invasive retargeting pixels, or data-brokered advertising cookies. The cookies and local storage tokens we use are limited to:
            </p>

            <div className="space-y-4 pt-2">
              {/* Essential */}
              <div className="p-5 bg-white rounded-sm border border-forest/10 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-base text-charcoal flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest" />
                    <span>A. Strictly Necessary &amp; Security Cookies</span>
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-forest-50 text-forest border border-forest/15 rounded">
                    Exempt from Consent
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-muted">
                  These items are essential for core site navigation, form security against cross-site request forgery, load balancing, and remembering your consent selections (<code className="bg-sage/40 px-1 py-0.5 rounded text-xs">gobiq_cookie_consent</code>). Because the website cannot function properly without them, they cannot be switched off.
                </p>
              </div>

              {/* Analytics */}
              <div className="p-5 bg-white rounded-sm border border-forest/10 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-base text-charcoal flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-gold" />
                    <span>B. Analytics &amp; Performance Cookies</span>
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-gold/10 text-gold-dark border border-gold/30 rounded">
                    Requires Opt-in Consent
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-muted">
                  These optional cookies help us understand aggregate visitor volumes, page load speeds, and popular services. All data is anonymized or pseudonymized before processing. We strictly refrain from loading analytical scripts until you have explicitly clicked &ldquo;Accept All&rdquo; or activated analytics in your preferences.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              3. Managing Cookies in Your Web Browser
            </h2>
            <p>
              In addition to our preference modal, you can control, block, or delete cookies directly within your browser settings:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data.</li>
              <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data.</li>
              <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data.</li>
              <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions.</li>
            </ul>
            <p className="text-xs text-charcoal-muted italic">
              Please note that disabling strictly necessary cookies through browser settings may degrade website layout and enquiry submission functionality.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-forest/10">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              4. Questions and Further Details
            </h2>
            <p>
              If you have any questions regarding our cookie practices, please contact our team at{" "}
              <a href={`mailto:${companyData.contact.email}`} className="text-forest font-semibold underline hover:text-gold">
                {companyData.contact.email}
              </a>{" "}
              or write to our registered office: {companyData.registeredOffice.fullAddress}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
