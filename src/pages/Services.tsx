import React, { useState } from "react";
import {
  Check,
  ClipboardList,
  ChevronDown,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Phone,
} from "lucide-react";
import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { servicesData, faqsData } from "../data/services";
import { companyData } from "../data/company";

export const Services: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-20 lg:space-y-28 pb-16">
      {/* =========================================================================
          SERVICES HERO SECTION
          ========================================================================= */}
      <section className="bg-white border-b border-forest/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-sage/40 text-forest border border-forest/10">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
              <span>Proposed Domestic Capabilities</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-tight">
              Domestic Building Construction Services
            </h1>

            <div className="w-16 h-1 bg-gold rounded-full" />

            <p className="text-lg sm:text-xl text-charcoal-light leading-relaxed">
              We deliver structured domestic construction services across residential new builds, extensions, renovations, and structural alterations.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED ALTERNATING SERVICES BREAKDOWN
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.slug}
              className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white rounded-sm border border-forest/10 p-6 sm:p-10 lg:p-12 shadow-card"
            >
              {/* Image side */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-forest/10 bg-forest/5 group">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-forest/90 text-ivory text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm backdrop-blur-sm">
                    {service.category}
                  </div>
                </div>
              </div>

              {/* Text content side */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-gold">
                    Service 0{index + 1}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-1">
                    {service.title}
                  </h2>
                </div>

                <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Key features checklist */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                    <span>Key Scope Capabilities</span>
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-light">
                        <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Typical Customer Requirements */}
                <div className="p-4 bg-sage/30 rounded-sm border border-forest/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest">
                    <ClipboardList className="w-4 h-4 text-gold shrink-0" />
                    <span>Typical Project Requirements</span>
                  </div>
                  <ul className="space-y-1.5 pl-6 list-disc text-xs text-charcoal-muted">
                    {service.typicalRequirements.map((req, rIdx) => (
                      <li key={rIdx}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Planning note */}
                <div className="flex items-start gap-2 text-xs text-charcoal-muted italic">
                  <ShieldAlert className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{service.planningAdvice}</span>
                </div>

                {/* Next Step CTA */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Enquire About {service.title}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* =========================================================================
          FAQ ACCORDION SECTION
          ========================================================================= */}
      <section className="bg-sage/20 border-y border-forest/10 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Planning &amp; Enquiry Guidance"
            description="Clear answers regarding our quotation process, early consultations, and domestic building procedures."
            align="center"
          />

          <div className="mt-12 space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-sm border border-forest/10 shadow-subtle overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-forest/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-base sm:text-lg text-charcoal flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-gold shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-forest shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-gold" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-charcoal-light leading-relaxed border-t border-forest/5 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-6 bg-white rounded-sm border border-forest/10 shadow-subtle">
            <p className="text-sm text-charcoal">
              Have a specific question about your upcoming project?
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" size="sm">
                Submit an Online Enquiry
              </Button>
              <Button
                href={`tel:${companyData.contact.phoneTel}`}
                variant="secondary"
                size="sm"
                icon={<Phone className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                Call 07796 195206
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
