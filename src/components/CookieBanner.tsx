import React, { useState, useEffect } from "react";
import { ShieldCheck, Cookie, X, Check, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [analyticsConsent, setAnalyticsConsent] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("gobiq_cookie_consent");
    if (!saved) {
      // Delay slightly for natural page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setAnalyticsConsent(!!parsed.analytics);
      } catch {
        // ignore
      }
    }

    // Listen for custom event from Cookie Policy page to re-open preferences
    const handleOpenPref = () => {
      setShowModal(true);
    };
    window.addEventListener("open-cookie-preferences", handleOpenPref);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPref);
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem("gobiq_cookie_consent", JSON.stringify(consent));
    setAnalyticsConsent(true);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectNonEssential = () => {
    const consent = {
      essential: true,
      analytics: false,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem("gobiq_cookie_consent", JSON.stringify(consent));
    setAnalyticsConsent(false);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSaveCustom = () => {
    const consent = {
      essential: true,
      analytics: analyticsConsent,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem("gobiq_cookie_consent", JSON.stringify(consent));
    setShowBanner(false);
    setShowModal(false);
  };

  if (!showBanner && !showModal) {
    return null;
  }

  return (
    <>
      {/* Bottom Sticky Cookie Banner */}
      {showBanner && !showModal && (
        <div
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-forest/15 shadow-elevated animate-in slide-in-from-bottom duration-300"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 max-w-3xl">
              <div className="w-10 h-10 rounded-sm bg-forest-50 text-forest flex items-center justify-center shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-gold" />
              </div>
              <div className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                <strong className="text-charcoal font-semibold block">UK Privacy &amp; Cookie Notice:</strong>
                GOBIQ LTD uses strictly necessary cookies to operate this website securely. With your permission, we also use privacy-friendly analytics to understand visitor browsing and improve our construction services. Read our{" "}
                <Link to="/cookies" className="text-forest font-semibold underline hover:text-gold">
                  Cookie Policy
                </Link>{" "}
                for full technical details.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal border border-forest/20 rounded-sm hover:bg-forest/5 transition-colors flex items-center gap-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-forest" />
                <span>Preferences</span>
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-forest border border-forest/40 rounded-sm hover:bg-forest/5 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-forest text-white rounded-sm hover:bg-forest-600 transition-colors shadow-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white w-full max-w-lg rounded-sm shadow-elevated border border-forest/15 overflow-hidden p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-forest/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-forest" />
                <h3 className="font-heading font-bold text-lg text-charcoal">
                  Cookie Consent Preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-1.5 text-charcoal-muted hover:text-charcoal hover:bg-forest/5 rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-5 text-xs text-charcoal-light">
              <p className="leading-relaxed">
                In compliance with the UK Privacy and Electronic Communications Regulations (PECR) and UK GDPR, you can choose which categories of cookies GOBIQ LTD may store on your device.
              </p>

              {/* Necessary */}
              <div className="p-4 bg-forest-50/50 rounded-sm border border-forest/10">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-charcoal text-sm flex items-center gap-1.5">
                    <span>1. Strictly Necessary Cookies</span>
                    <Check className="w-4 h-4 text-forest" />
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-forest/10 text-forest rounded">
                    Always Active
                  </span>
                </div>
                <p className="mt-2 text-charcoal-muted leading-relaxed">
                  Required for core website security, responsive viewports, session persistence, and remembering your privacy selections. Cannot be switched off.
                </p>
              </div>

              {/* Analytics */}
              <div className="p-4 bg-white rounded-sm border border-forest/10">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-charcoal text-sm">
                    2. Analytics &amp; Performance Cookies
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsConsent}
                      onChange={(e) => setAnalyticsConsent(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-forest"></div>
                  </label>
                </div>
                <p className="mt-2 text-charcoal-muted leading-relaxed">
                  Helps us understand aggregated traffic and page navigation patterns without identifying individual visitors. No personal advertising profiling is conducted.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-forest/10 flex flex-col sm:flex-row items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-forest border border-forest/30 rounded-sm hover:bg-forest/5 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-forest text-white rounded-sm hover:bg-forest-600 transition-colors shadow-sm"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
