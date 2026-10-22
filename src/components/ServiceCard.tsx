import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import type { ServiceItem } from "../data/services";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <div
      className={`group bg-white rounded-sm border border-forest/10 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-gold/50 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Card Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-forest/5">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        <span className="absolute top-4 left-4 bg-forest/90 text-ivory text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm backdrop-blur-sm border border-white/10">
          {service.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold text-charcoal group-hover:text-forest transition-colors">
            {service.title}
          </h3>
          <p className="mt-3 text-sm text-charcoal-muted leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Quick key highlights */}
          <ul className="mt-4 space-y-1.5 border-t border-forest/5 pt-4">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-light">
                <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-forest/10 flex items-center justify-between">
          <Link
            to={`/services#${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors"
          >
            <span>Explore Service Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
