import React, { useState } from "react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle,
  Clock,
  Compass,
  FileCheck2,
  HardHat,
  Sparkles,
} from "lucide-react";
import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { companyData } from "../data/company";
import { servicesData } from "../data/services";
import { projectsData } from "../data/projects";
import type { ProjectItem } from "../data/projects";

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Four honest value propositions
  const values = [
    {
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      title: "Quality-Focused Workmanship",
      desc: "Committed to robust construction methods, compliant materials, and exacting finishes tailored for everyday domestic life.",
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-gold" />,
      title: "Clear Communication",
      desc: "Transparent discussions from initial scope to site handover. We keep homeowners informed at every stage of the build.",
    },
    {
      icon: <Compass className="w-5 h-5 text-gold" />,
      title: "Thoughtful Project Planning",
      desc: "Proactive coordination of trades, building control milestones, and material logistics to minimise domestic disruption.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: "Attention to Detail",
      desc: "From structural steel accuracy to neat joinery interfaces, we treat every home with architectural precision and care.",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-16">
      {/* =========================================================================
          HERO SECTION
          Zoho-inspired clarity + Architectural high-end presence
          ========================================================================= */}
      <section className="relative overflow-hidden bg-ivory pt-6 sm:pt-10 lg:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-forest-50 border border-forest/15 text-xs font-semibold text-forest uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                <span>Active UK Domestic Construction Contractor</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal leading-[1.12]">
                Building Better Homes.{" "}
                <span className="text-forest block mt-1">Creating Lasting Value.</span>
              </h1>

              {/* Architectural gold line */}
              <div className="w-16 h-1 bg-gold rounded-full" />

              <p className="text-base sm:text-lg text-charcoal-light leading-relaxed max-w-2xl">
                {companyData.heroDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Your Project
                </Button>
                <Button
                  to="/services"
                  variant="secondary"
                  size="lg"
                >
                  Explore Our Services
                </Button>
              </div>

              {/* Trust & Verification Badges */}
              <div className="pt-6 border-t border-forest/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-charcoal-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-forest shrink-0" />
                  <span>SIC 41202 Domestic</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-forest shrink-0" />
                  <span>Co. No. {companyData.companyNumber}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle className="w-4 h-4 text-forest shrink-0" />
                  <span>West Midlands &amp; UK</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm overflow-hidden shadow-elevated border border-forest/10 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Contemporary British residential architecture with quality brickwork and large glazing"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent opacity-50" />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm p-4 rounded-sm border border-forest/10 shadow-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-gold">
                        Domestic Excellence
                      </p>
                      <p className="font-heading font-bold text-sm text-charcoal">
                        Residential Craftsmanship
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center">
                      <HardHat className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPANY INTRODUCTION
          Two-column editorial presentation
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm border border-forest/10 p-6 sm:p-10 lg:p-14 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-forest/10">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional UK building contractor inspecting construction site"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-forest text-white px-3 py-1 rounded-sm text-xs font-semibold">
                  Active Domestic Contractor
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <SectionHeading
                badge="Who We Are"
                title="A Thoughtful Approach to Home Construction"
                description="GOBIQ LTD is an active UK domestic building construction company registered in England (Company No. 17428577). We specialize in creating durable, well-considered domestic spaces."
              />

              <div className="space-y-4 text-charcoal-light text-sm sm:text-base leading-relaxed">
                <p>
                  Every home construction project represents a significant investment in time, finance, and everyday comfort. That is why GOBIQ LTD prioritises thorough upfront planning, structural integrity, and transparent communication from the outset.
                </p>
                <p>
                  Whether executing an ambitious single or double-storey extension, reconfiguring internal load-bearing structures for modern living, or undertaking a complete domestic refurbishment, our practical approach ensures your requirements are translated into quality workmanship.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button to="/about" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Discover Our Company
                </Button>
                <div className="flex items-center gap-2 text-xs text-charcoal-muted">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>Incorporated 31 August 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES OVERVIEW
          Four distinct service cards
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="What We Build"
            title="Construction Services"
            description="Our proposed domestic service capabilities encompass every stage of residential development, extensions, and structural alterations."
          />
          <Button to="/services" variant="secondary" size="md" icon={<ArrowRight className="w-3.5 h-3.5" />}>
            View All Services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE GOBIQ LTD
          Four honest value propositions
          ========================================================================= */}
      <section className="bg-sage/20 border-y border-forest/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Approach"
            title="Why Choose GOBIQ LTD?"
            description="We ground our domestic construction services in dependable standards, practical building discipline, and honest project management."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-sm border border-forest/10 shadow-subtle hover:border-gold/40 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-sm bg-forest-50 border border-forest/10 flex items-center justify-center mb-5">
                  {val.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS GALLERY
          Large architectural images with minimal text & sample disclaimers
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Portfolio Inspiration"
            title="Built Around Better Living"
            description="Explore our illustrative domestic concepts showcasing residential new builds, extensions, and modern refurbishments."
          />
          <Button to="/projects" variant="secondary" size="md" icon={<ArrowRight className="w-3.5 h-3.5" />}>
            View All Projects
          </Button>
        </div>

        {/* 3 Featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal for project inspection */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </section>

      {/* =========================================================================
          CALL TO ACTION (CTA)
          Deep Forest Green background (#183D32)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest rounded-sm text-ivory p-8 sm:p-12 lg:p-16 border border-forest-600 shadow-elevated relative overflow-hidden">
          {/* Subtle architectural background accents */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" stroke="#C5A46D" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="#C5A46D" strokeWidth="1" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="#C5A46D" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-600/80 border border-gold/30 text-xs font-semibold text-gold-light uppercase tracking-widest">
              <span>Next Steps</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Planning Your Next Building Project?
            </h2>

            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed">
              Tell us what you have in mind. Get in touch to discuss your residential construction requirements, review plans, or schedule an initial consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                to="/contact"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Quote
              </Button>

              <Button
                href={`tel:${companyData.contact.phoneTel}`}
                variant="outline-white"
                size="lg"
                icon={<Phone className="w-4 h-4 text-gold" />}
                iconPosition="left"
              >
                Call {companyData.contact.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
