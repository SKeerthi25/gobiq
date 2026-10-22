import React from "react";
import {
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Shield,
  Hammer,
  Eye,
  FileText,
  Phone,
} from "lucide-react";
import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { companyData } from "../data/company";

export const About: React.FC = () => {
  return (
    <div className="space-y-20 lg:space-y-28 pb-16">
      {/* =========================================================================
          ABOUT HERO SECTION
          ========================================================================= */}
      <section className="bg-white border-b border-forest/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-sage/40 text-forest border border-forest/10">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
              <span>About GOBIQ LTD</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-tight">
              A Considered Approach to Domestic Construction
            </h1>

            <div className="w-16 h-1 bg-gold rounded-full" />

            <p className="text-lg sm:text-xl text-charcoal-light leading-relaxed">
              GOBIQ LTD is an active British domestic building construction company founded on principles of practical craftsmanship, structural integrity, and transparent client communication.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPANY FOCUS & PRINCIPLES
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="Our Focus"
              title="Dedicated to Residential Domestic Building"
              description="Under SIC Code 41202, our trade classification and operations are strictly focused on the construction, extension, and structural enhancement of domestic homes."
            />

            <div className="space-y-4 text-sm sm:text-base text-charcoal-light leading-relaxed">
              <p>
                A house is far more than just a sequence of materials — it is the physical framework of everyday life. At GOBIQ LTD, we believe domestic building requires a higher degree of consideration than generic commercial works. We operate cleanly, respect homeowner boundaries, and maintain a tidy site throughout every project phase.
              </p>
              <p>
                From coordinating groundworks and laying precise brick courses to installing load-bearing structural steels and finalising timber finishes, we adhere rigorously to UK Building Regulations and local authority inspections.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-forest-50/60 rounded-sm border border-forest/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-charcoal block font-semibold">Architectural Accuracy</strong>
                  <span className="text-charcoal-muted">Working strictly to approved engineer drawings and building notes.</span>
                </div>
              </div>
              <div className="p-4 bg-forest-50/60 rounded-sm border border-forest/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-charcoal block font-semibold">Tidy Site Protocol</strong>
                  <span className="text-charcoal-muted">Minimising household dust, noise, and neighbor disruption.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-sm overflow-hidden border border-forest/10 shadow-subtle aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                    alt="Carefully detailed contemporary British home exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-white rounded-sm border border-forest/10 text-xs">
                  <span className="font-semibold text-charcoal block">Precision Masonry</span>
                  <span className="text-charcoal-muted">Mortar jointing and brick detailing.</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 bg-forest text-ivory rounded-sm border border-forest-600 text-xs">
                  <span className="font-semibold text-gold-light block">Structural Focus</span>
                  <span className="text-ivory/80">RSJ installations &amp; domestic foundations.</span>
                </div>
                <div className="rounded-sm overflow-hidden border border-forest/10 shadow-subtle aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                    alt="Interior glazed residential extension"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUR PILLARS OF OUR APPROACH
          ========================================================================= */}
      <section className="bg-sage/20 border-y border-forest/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Methodology"
            title="The Four Pillars of Our Approach"
            description="How GOBIQ LTD approaches residential building work with discipline and structure."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            <div className="bg-white p-7 rounded-sm border border-forest/10 shadow-subtle">
              <div className="w-12 h-12 rounded-sm bg-forest-50 border border-forest/10 flex items-center justify-center mb-5">
                <FileText className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">
                1. Thoughtful Planning
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                We review drawings, structural calculations, and site constraints before groundwork commences, avoiding costly surprises mid-construction.
              </p>
            </div>

            <div className="bg-white p-7 rounded-sm border border-forest/10 shadow-subtle">
              <div className="w-12 h-12 rounded-sm bg-forest-50 border border-forest/10 flex items-center justify-center mb-5">
                <Hammer className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">
                2. Dependable Workmanship
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                We take pride in solid construction practices — from correct damp-proof course placement to accurate structural timber and steel fitting.
              </p>
            </div>

            <div className="bg-white p-7 rounded-sm border border-forest/10 shadow-subtle">
              <div className="w-12 h-12 rounded-sm bg-forest-50 border border-forest/10 flex items-center justify-center mb-5">
                <Eye className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">
                3. Clear Communication
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Homeowners deserve honest status updates. We keep communication open, direct, and straightforward throughout each phase.
              </p>
            </div>

            <div className="bg-white p-7 rounded-sm border border-forest/10 shadow-subtle">
              <div className="w-12 h-12 rounded-sm bg-forest-50 border border-forest/10 flex items-center justify-center mb-5">
                <Shield className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">
                4. Attention to Detail
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                From clean flush thresholds to immaculate plaster interfaces, the difference between an ordinary job and a premium home lies in the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VERIFIED COMPANY DETAILS PANEL
          100% verified Companies House data
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm border border-forest/15 p-8 sm:p-12 shadow-card">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Corporate Transparency
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mt-1">
              Registered Company Information
            </h2>
            <p className="text-sm text-charcoal-muted mt-2">
              GOBIQ LTD is an active private limited company incorporated in England and Wales under the Companies Act 2006.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-forest/10 pt-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-muted uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-forest" />
                <span>Company Name</span>
              </div>
              <p className="text-base font-bold text-charcoal">{companyData.legalName}</p>
              <p className="text-xs text-charcoal-muted">Private Limited Company</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-muted uppercase tracking-wider">
                <Shield className="w-4 h-4 text-forest" />
                <span>Companies House No.</span>
              </div>
              <p className="text-base font-mono font-bold text-forest">{companyData.companyNumber}</p>
              <p className="text-xs text-green-700 font-medium">Status: {companyData.status}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-muted uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-forest" />
                <span>Incorporation Date</span>
              </div>
              <p className="text-base font-bold text-charcoal">{companyData.incorporationDate}</p>
              <p className="text-xs text-charcoal-muted">Registrar of Companies for England &amp; Wales</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-muted uppercase tracking-wider">
                <FileText className="w-4 h-4 text-forest" />
                <span>Business Classification</span>
              </div>
              <p className="text-base font-bold text-charcoal">SIC {companyData.sicCode}</p>
              <p className="text-xs text-charcoal-muted">{companyData.sicDescription}</p>
            </div>

            <div className="space-y-1 md:col-span-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-muted uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-forest" />
                <span>Registered Office Address</span>
              </div>
              <p className="text-base font-bold text-charcoal">{companyData.registeredOffice.fullAddress}</p>
              <p className="text-xs text-charcoal-muted">Tipton, West Midlands, England</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT CTA
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest rounded-sm p-8 sm:p-12 text-ivory flex flex-col md:flex-row items-center justify-between gap-8 border border-forest-600">
          <div className="max-w-xl space-y-3 text-center md:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Ready to Discuss Your Domestic Build?
            </h3>
            <p className="text-sm sm:text-base text-ivory/80">
              Get in touch with our team today to discuss your new build, extension, or structural renovation plans.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Button to="/contact" variant="gold" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Contact Our Team
            </Button>
            <Button
              href={`tel:${companyData.contact.phoneTel}`}
              variant="outline-white"
              size="md"
              icon={<Phone className="w-4 h-4 text-gold" />}
              iconPosition="left"
            >
              07796 195206
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
