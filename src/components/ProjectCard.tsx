import React from "react";
import { MapPin, Eye, ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "../data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer bg-white rounded-sm border border-forest/10 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-gold/50"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Project Image */}
      <div className="relative aspect-[16/11] overflow-hidden bg-forest/5">
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

        {/* Category & Sample Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="bg-forest/90 text-ivory text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm backdrop-blur-sm border border-white/10">
            {project.categoryLabel}
          </span>
          {project.isSampleContent && (
            <span className="bg-gold/90 text-charcoal text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-sm backdrop-blur-sm border border-charcoal/10">
              Sample Concept
            </span>
          )}
        </div>

        {/* Hover inspect indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-3.5 py-2 rounded-sm bg-ivory text-forest text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-card">
            <Eye className="w-3.5 h-3.5" />
            <span>View Specifications</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-charcoal-muted mb-2">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>{project.location}</span>
          </div>

          <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-forest transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-forest/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-forest group-hover:text-gold transition-colors inline-flex items-center gap-1">
            <span>Explore Concept Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
