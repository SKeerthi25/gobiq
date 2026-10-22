export interface ProjectItem {
  id: string;
  title: string;
  category: "new-build" | "extension" | "renovation" | "structural";
  categoryLabel: string;
  location: string;
  isSampleContent: boolean;
  tag: string;
  summary: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  heroImage: string;
  galleryImages: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "contemporary-residential-property",
    title: "Contemporary Residential Property",
    category: "new-build",
    categoryLabel: "Residential New Build",
    location: "West Midlands (Illustrative Concept)",
    isSampleContent: true,
    tag: "Sample Concept",
    summary: "Architecturally designed domestic detached new-build demonstrating contemporary masonry, bespoke glazing, and efficient spatial layout.",
    description:
      "This illustrative project concept showcases a modern four-bedroom detached family home. Featuring traditional brickwork combined with contrasting standing-seam accents, high-performance glazing, underfloor heating, and open-plan family living zones. Rendered for demonstration purposes to illustrate typical domestic new-build construction scope.",
    specs: [
      { label: "Project Classification", value: "Domestic New-Build Home" },
      { label: "Building Footprint", value: "Approx. 220 sq m" },
      { label: "Key Materials", value: "Facing Brickwork, Zinc Cladding, Aluminium Glazing" },
      { label: "Status", value: "Illustrative Portfolio Sample" }
    ],
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "modern-home-extension",
    title: "Modern Home Extension",
    category: "extension",
    categoryLabel: "Home Extension",
    location: "Birmingham Suburbs (Illustrative Concept)",
    isSampleContent: true,
    tag: "Sample Concept",
    summary: "Single-storey rear wrap-around extension integrating an expansive kitchen, dining island, and frameless flush garden threshold.",
    description:
      "Illustrating an ambitious domestic extension designed to transform dark compartmentalised ground floors into a bright, cohesive living hub. The concept incorporates structural steel knock-throughs, continuous level flooring leading directly onto an outdoor terrace, and oversized architectural rooflights.",
    specs: [
      { label: "Project Classification", value: "Domestic Ground-Floor Extension" },
      { label: "Added Floor Area", value: "Approx. 55 sq m" },
      { label: "Glazing Spec", value: "Thermally broken aluminium sliding system" },
      { label: "Status", value: "Illustrative Portfolio Sample" }
    ],
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "residential-renovation",
    title: "Residential Renovation & Modernisation",
    category: "renovation",
    categoryLabel: "Property Renovation",
    location: "Solihull (Illustrative Concept)",
    isSampleContent: true,
    tag: "Sample Concept",
    summary: "Whole-house domestic refurbishment modernising services, insulating envelopes, and introducing bespoke architectural carpentry.",
    description:
      "A comprehensive internal domestic renovation sample demonstrating the sympathetic restoration of traditional room volumes alongside modern comfort standards. Features upgraded acoustic dampening, custom-crafted cabinetry, bespoke herringbone oak floors, and newly configured ensuite bathrooms.",
    specs: [
      { label: "Project Classification", value: "Full Domestic Refurbishment" },
      { label: "Scope", value: "Strip-out, replastering, joinery, kitchen & bathrooms" },
      { label: "Energy Upgrades", value: "Internal wall insulation and modern heating controls" },
      { label: "Status", value: "Illustrative Portfolio Sample" }
    ],
    heroImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "structural-alteration-open-plan",
    title: "Structural Knock-Through & Living Reconfiguration",
    category: "structural",
    categoryLabel: "Structural Works",
    location: "Black Country (Illustrative Concept)",
    isSampleContent: true,
    tag: "Sample Concept",
    summary: "Engineering precision with dual RSJ steel framework replacing central load-bearing walls for light-flooded multi-zone living.",
    description:
      "A sample representation of structural domestic alterations. Temporary propping installed while central dividing walls and chimney stacks were dismantled, succeeded by structural steel beams recessed flush into the ceiling joist line for completely flat, seamless ceiling planes.",
    specs: [
      { label: "Project Classification", value: "Structural Load-Bearing Alterations" },
      { label: "Steel Elements", value: "Twin universal steel beams with welded plates" },
      { label: "Building Control", value: "Engineered calculations & local authority sign-off" },
      { label: "Status", value: "Illustrative Portfolio Sample" }
    ],
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "brick-and-oak-garden-room",
    title: "Brick & Glazed Garden Pavilion Extension",
    category: "extension",
    categoryLabel: "Home Extension",
    location: "Staffordshire (Illustrative Concept)",
    isSampleContent: true,
    tag: "Sample Concept",
    summary: "Sympathetic brick-matched garden room extension with pitched gable glazing, bringing botanical views directly into the heart of the home.",
    description:
      "Illustrative sample of a light-filled domestic garden room extension. Designed with locally sourced facing brick to blend seamlessly with the host property, complemented by vaulted ceilings, exposed oak structural rafters, and energy-efficient double glazing.",
    specs: [
      { label: "Project Classification", value: "Domestic Garden Extension" },
      { label: "Roof Style", value: "Pitched gable with architectural glazed apex" },
      { label: "Floor Finish", value: "Natural limestone with zoned underfloor heating" },
      { label: "Status", value: "Illustrative Portfolio Sample" }
    ],
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "bespoke-sustainable-residence",
    title: "High-Efficiency Domestic Residence",
    category: "new-build",
    categoryLabel: "Residential New Build",
    location: "Warwickshire (Illustrative Concept)",
    isSampleContent: true,
    tag: "Sample Concept",
    summary: "Super-insulated bespoke detached home prioritising airtight construction, solar gain, and low-carbon domestic heating.",
    description:
      "A sample concept illustrating how domestic building standards are evolving. Incorporating air-source heat pumps, mechanical ventilation with heat recovery (MVHR), triple glazing, and precision brickwork details designed to minimise thermal bridging.",
    specs: [
      { label: "Project Classification", value: "Low-Carbon Domestic New Build" },
      { label: "Energy Rating Aim", value: "EPC A-rated specification" },
      { label: "Heating Tech", value: "Air Source Heat Pump + Low Temp Underfloor" },
      { label: "Status", value: "Illustrative Portfolio Sample" }
    ],
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80"
    ]
  }
];
