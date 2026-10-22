import React, { useState } from "react";
import { Info, Sparkles, Filter } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { Button } from "../components/Button";
import { projectsData } from "../data/projects";
import type { ProjectItem } from "../data/projects";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "new-build", label: "New Builds" },
    { id: "extension", label: "Extensions" },
    { id: "renovation", label: "Renovations" },
    { id: "structural", label: "Structural Works" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* =========================================================================
          PROJECTS HERO SECTION
          ========================================================================= */}
      <section className="bg-white border-b border-forest/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-sage/40 text-forest border border-forest/10">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
              <span>Project Gallery &amp; Concepts</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-tight">
              Domestic Building Portfolio
            </h1>

            <div className="w-16 h-1 bg-gold rounded-full" />

            <p className="text-lg sm:text-xl text-charcoal-light leading-relaxed">
              Explore our architectural concepts illustrating contemporary residential new builds, rear and wrap-around home extensions, and domestic structural reconfigurations.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SAMPLE CONTENT TRANSPARENCY NOTICE
          Complying with strict prompt guidelines
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-6 bg-amber-50/80 border border-amber-200 rounded-sm text-charcoal text-xs sm:text-sm flex items-start gap-4">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 leading-relaxed">
            <strong className="font-bold text-amber-900 block">
              Development Transparency Notice:
            </strong>
            <p className="text-amber-800">
              In accordance with honest UK business standards, the case studies presented below are clearly labelled as sample illustrative concepts to represent the types and scope of domestic construction services GOBIQ LTD provides. Genuine completed client case studies will be published here with homeowner consent as our active projects reach completion.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FILTER TABS & GRID
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-forest/10 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
            <Filter className="w-4 h-4 text-forest" />
            <span>Filter by Category:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-forest text-white shadow-subtle"
                      : "bg-white text-charcoal border border-forest/10 hover:border-forest/40 hover:bg-forest/5"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-sm border border-forest/10">
            <p className="text-charcoal-muted">No projects found in this category.</p>
          </div>
        )}

        {/* Project Inspection Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </section>

      {/* =========================================================================
          PORTFOLIO INVITATION CTA
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest rounded-sm p-8 sm:p-12 text-ivory flex flex-col md:flex-row items-center justify-between gap-8 border border-forest-600 shadow-card">
          <div className="max-w-xl space-y-3 text-center md:text-left">
            <span className="text-xs uppercase font-semibold text-gold-light tracking-widest flex items-center gap-1.5 justify-center md:justify-start">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Have Plans in Hand?</span>
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Let&apos;s Review Your Architectural Drawings
            </h3>
            <p className="text-sm sm:text-base text-ivory/80">
              Send over your plans or planning permission notices for a detailed review and honest quotation discussion.
            </p>
          </div>

          <Button to="/contact" variant="gold" size="lg">
            Submit Your Plans for Review
          </Button>
        </div>
      </section>
    </div>
  );
};
