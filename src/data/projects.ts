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
    title: "Detached Residential New-Build",
    category: "new-build",
    categoryLabel: "Residential New Build",
    location: "West Midlands",
    isSampleContent: true,
    tag: "Concept Scope",
    summary: "Complete domestic detached home construction showcasing traditional facing brickwork, modern fenestration, and groundworks.",
    description:
      "This project showcases a contemporary detached British family residence under construction. Illustrating the integration of deep trench substructures, facing red brickwork, precision cavity insulation, damp-proofing, and high-performance weather-tight double glazing.",
    specs: [
      { label: "Project Classification", value: "Domestic New-Build Home" },
      { label: "Building Footprint", value: "Approx. 220 sq m" },
      { label: "Key Materials", value: "Facing Brickwork, Concrete Roof Tiles, Upgraded Windows" },
      { label: "Scope Phase", value: "Groundworks to Superstructure Envelope" }
    ],
    heroImage: "/images/residential-new-build.png",
    galleryImages: [
      "/images/brick-homes-machinery.png",
      "/images/completed-home.png",
      "/images/trusses-brickwork.png"
    ]
  },
  {
    id: "modern-home-extension",
    title: "Double-Storey Domestic Rear Extension",
    category: "extension",
    categoryLabel: "Home Extension",
    location: "Tipton / Black Country",
    isSampleContent: true,
    tag: "Concept Scope",
    summary: "Two-storey brick and timber residential rear extension expanding ground-floor living alongside first-floor bedrooms.",
    description:
      "An active domestic extension build featuring structural perimeter scaffolding, precision timber stud upper framing, matching brick courses, and full integration into the host residential roofline and floor plan.",
    specs: [
      { label: "Project Classification", value: "Double-Storey Rear Extension" },
      { label: "Added Floor Area", value: "Approx. 65 sq m" },
      { label: "Framing Spec", value: "Engineered timber upper floor + matching brick ground floor" },
      { label: "Scope Phase", value: "Full structural shell and external envelope" }
    ],
    heroImage: "/images/double-storey-extension.png",
    galleryImages: [
      "/images/brickwork-craftsmanship.png",
      "/images/groundworks.png",
      "/images/housing-development.png"
    ]
  },
  {
    id: "residential-renovation",
    title: "Residential Property Refurbishment & Masonry",
    category: "renovation",
    categoryLabel: "Property Renovation",
    location: "West Midlands",
    isSampleContent: true,
    tag: "Concept Scope",
    summary: "Whole-house external refurbishment with full scaffolding, chimney remediation, new window surrounds, and masonry cleaning.",
    description:
      "Comprehensive domestic property renovation demonstrating careful masonry restoration, structural timber eaves repairs, replacement roof tiling, and renewed energy-efficient external fixtures.",
    specs: [
      { label: "Project Classification", value: "Full Domestic Refurbishment" },
      { label: "Scope", value: "Scaffolding, brick repairs, chimney stack repointing, window reveals" },
      { label: "Safety & Compliance", value: "Full perimeter edge protection & HSE safety compliance" },
      { label: "Scope Phase", value: "External fabric restoration & modernization" }
    ],
    heroImage: "/images/renovation-scaffolding.png",
    galleryImages: [
      "/images/site-inspection.png",
      "/images/completed-home.png",
      "/images/brickwork-craftsmanship.png"
    ]
  },
  {
    id: "structural-alteration-open-plan",
    title: "Structural Roof Framing & Gable Works",
    category: "structural",
    categoryLabel: "Structural Works",
    location: "West Midlands",
    isSampleContent: true,
    tag: "Concept Scope",
    summary: "Precision domestic roof truss assembly, gable masonry support, and structural timber engineering.",
    description:
      "Structural residential construction showcasing pre-fabricated gang-nail roof trusses lifted and braced into position, anchor-strapped to wall plates, and ready for breathable roofing membranes and tiles.",
    specs: [
      { label: "Project Classification", value: "Structural Timber & Masonry" },
      { label: "Timber Elements", value: "Engineered timber roof trusses and wind bracing" },
      { label: "Building Control", value: "Inspected at wall-plate and truss tie-down stages" },
      { label: "Scope Phase", value: "Roof structural assembly" }
    ],
    heroImage: "/images/roof-structure.png",
    galleryImages: [
      "/images/site-inspection.png",
      "/images/housing-development.png",
      "/images/trusses-brickwork.png"
    ]
  },
  {
    id: "substructure-and-groundworks",
    title: "Foundations & Domestic Groundworks",
    category: "structural",
    categoryLabel: "Structural Works",
    location: "West Midlands",
    isSampleContent: true,
    tag: "Concept Scope",
    summary: "Substructure excavation, drainage integration, and ground-level preparation for domestic extensions.",
    description:
      "Ground-stage construction including soil excavation, sub-base compaction, boundary fencing alignment, and preparation for reinforced concrete footings and domestic drainage channels.",
    specs: [
      { label: "Project Classification", value: "Domestic Groundworks & Foundations" },
      { label: "Key Tasks", value: "Trenching, levelling, aggregate sub-base, boundary setting" },
      { label: "Inspections", value: "Local Authority Building Control footing inspection" },
      { label: "Scope Phase", value: "Substructure and groundwork" }
    ],
    heroImage: "/images/groundworks.png",
    galleryImages: [
      "/images/brickwork-craftsmanship.png",
      "/images/double-storey-extension.png",
      "/images/residential-new-build.png"
    ]
  },
  {
    id: "british-residential-development",
    title: "Residential New-Build Street Development",
    category: "new-build",
    categoryLabel: "Residential New Build",
    location: "West Midlands",
    isSampleContent: true,
    tag: "Concept Scope",
    summary: "Multi-plot residential domestic street construction highlighting brickwork craftsmanship, roofing, and plot completion.",
    description:
      "An expansive residential development showcasing domestic street-scene construction. From ground-level site preparation to complete two- and three-storey family brick homes with pitched tiled roofs and driveways.",
    specs: [
      { label: "Project Classification", value: "Domestic Residential Development" },
      { label: "Plots Overview", value: "Two and three-storey domestic homes" },
      { label: "Construction Method", value: "Traditional cavity brick and blockwork" },
      { label: "Scope Phase", value: "Phased domestic build to completion" }
    ],
    heroImage: "/images/home-hero.png",
    galleryImages: [
      "/images/development-sunset.png",
      "/images/brick-homes-machinery.png",
      "/images/completed-home.png"
    ]
  }
];
