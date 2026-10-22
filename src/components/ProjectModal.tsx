import React, { useState } from "react";
import { X, MapPin, Building, Info, ArrowRight } from "lucide-react";
import type { ProjectItem } from "../data/projects";
import { Button } from "./Button";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeImage, setActiveImage] = useState<string>(project.heroImage);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl rounded-sm shadow-elevated border border-forest/10 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-forest/10 bg-ivory">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-semibold text-gold tracking-wider">
                {project.categoryLabel}
              </span>
              {project.isSampleContent && (
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gold/15 text-gold-dark border border-gold/30">
                  Sample Concept
                </span>
              )}
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal mt-1">
              {project.title}
            </h3>
            <p className="text-xs text-charcoal-muted flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-forest" />
              <span>{project.location}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-charcoal-muted hover:text-charcoal hover:bg-forest/5 rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            aria-label="Close project modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Main Selected Image */}
          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-forest/5 border border-forest/10">
            <img
              src={activeImage}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {/* Thumbnails */}
          {project.galleryImages.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider mb-2">
                Project Gallery Views
              </p>
              <div className="flex gap-3 overflow-x-auto pb-2">
                <button
                  type="button"
                  onClick={() => setActiveImage(project.heroImage)}
                  className={`w-20 h-14 rounded-sm overflow-hidden shrink-0 border-2 transition-all ${
                    activeImage === project.heroImage
                      ? "border-forest shadow-sm"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={project.heroImage} alt="Main view" className="w-full h-full object-cover" />
                </button>
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-14 rounded-sm overflow-hidden shrink-0 border-2 transition-all ${
                      activeImage === img
                        ? "border-forest shadow-sm"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Gallery view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sample Content Disclaimer Notice */}
          {project.isSampleContent && (
            <div className="p-4 bg-amber-50 border border-amber-200/80 rounded-sm text-xs text-amber-900 flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">Illustrative Portfolio Concept:</strong> This project entry represents proposed architectural and domestic construction specifications for demonstration purposes. Genuine completed client case studies will be documented here as verified by GOBIQ LTD.
              </div>
            </div>
          )}

          {/* Project Description */}
          <div>
            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">
              Concept Overview &amp; Architectural Scope
            </h4>
            <p className="text-sm text-charcoal-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Specifications Table */}
          <div className="border border-forest/10 rounded-sm overflow-hidden">
            <div className="bg-forest/5 px-4 py-2.5 border-b border-forest/10 flex items-center gap-2">
              <Building className="w-4 h-4 text-forest" />
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-charcoal">
                Technical &amp; Scope Specifications
              </span>
            </div>
            <dl className="divide-y divide-forest/5">
              {project.specs.map((spec, idx) => (
                <div key={idx} className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 text-xs">
                  <dt className="font-semibold text-charcoal-muted">{spec.label}</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2 text-charcoal font-medium">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-forest/10 bg-ivory flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-muted text-center sm:text-left">
            Have a domestic building requirement similar to this concept?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button variant="secondary" size="sm" onClick={onClose} className="w-full sm:w-auto">
              Close
            </Button>
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="w-full sm:w-auto"
            >
              Enquire About Your Build
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
