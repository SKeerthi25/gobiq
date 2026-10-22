export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  imageAlt: string;
  features: string[];
  typicalRequirements: string[];
  planningAdvice: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "new-build-homes",
    slug: "new-build-homes",
    title: "New-Build Homes",
    category: "Residential New-Build",
    shortDesc: "Complete residential new-build construction delivered with precision, architectural clarity, and superior craftsmanship.",
    fullDesc:
      "From groundworks and substructure engineering to final internal finishes, our new-build domestic construction focuses on delivering homes designed for modern British living. We work collaboratively alongside architects, structural engineers, and domestic clients to transform approved plans into durable, energy-efficient residences.",
    image: "/images/residential-new-build.png",
    imageAlt: "Authentic British residential red brick new-build home under construction with groundworks",
    features: [
      "Substructure, foundation excavation, and reinforced slab works",
      "Traditional masonry, brickwork, and timber-frame construction",
      "High-performance thermal insulation and modern roof trusses",
      "Full internal first and second-fix carpentry and finishings",
      "Coordination with Building Regulations and local authority inspections"
    ],
    typicalRequirements: [
      "Full planning permission or permitted development clearance",
      "Architectural drawings and structural engineer calculations",
      "Clear boundary demarcation and site access considerations",
      "Party Wall agreements if constructing on or adjacent to boundaries"
    ],
    planningAdvice: "All domestic new builds require full planning consent and formal Building Regulations sign-off prior to occupancy."
  },
  {
    id: "home-extensions",
    slug: "home-extensions",
    title: "Home Extensions",
    category: "Domestic Extensions",
    shortDesc: "Thoughtfully planned single and double-storey extensions created to seamlessly enhance everyday family living space.",
    fullDesc:
      "A well-designed domestic extension adds vital square footage, elevates natural daylight, and significantly enhances household functionality. Whether you are expanding a kitchen with open-plan dining, constructing a double-storey rear elevation, or creating a wrap-around ground floor, we integrate every extension with your home's existing structural fabric.",
    image: "/images/double-storey-extension.png",
    imageAlt: "Active double-storey domestic rear extension build with timber framing, brickwork and scaffolding",
    features: [
      "Single-storey rear and side-return kitchen expansions",
      "Double-storey bedroom and living extensions",
      "Contemporary flat roofs with frameless skylights and lantern systems",
      "Seamless indoor-outdoor floor transitions and flush patio thresholds",
      "Structural steel beam (RSJ) knock-throughs for light-filled open layouts"
    ],
    typicalRequirements: [
      "Determination of Permitted Development Rights vs Full Planning",
      "Accurate measured survey and structural load assessment",
      "Drainage and Thames Water / Severn Trent build-over consent where applicable",
      "Neighbour notices and Party Wall Awards where applicable"
    ],
    planningAdvice: "Many single-storey rear extensions qualify under Permitted Development, though Prior Approval or full planning may be required depending on dimensions and property status."
  },
  {
    id: "property-renovations",
    slug: "property-renovations",
    title: "Property Renovations",
    category: "Domestic Refurbishment",
    shortDesc: "Sympathetic modernisation and complete refurbishments of existing houses to elevate comfort, aesthetics, and energy efficiency.",
    fullDesc:
      "Renovating a home demands respect for existing building materials coupled with modern technical standards. We undertake comprehensive domestic refurbishments — stripping back tired spaces, damp-proofing, rewiring, replumbing, and installing bespoke modern finishes that breathe fresh life into period properties and dated family homes.",
    image: "/images/renovation-scaffolding.png",
    imageAlt: "Residential home refurbishment and external works with full perimeter scaffolding and brick restoration",
    features: [
      "Comprehensive internal strip-outs and remedial masonry repairs",
      "Wall removals to create harmonious modern floorplans",
      "Thermal upgrades, dry-lining, plastering, and acoustic insulation",
      "Turn-key kitchen and luxury bathroom installations",
      "Architectural joinery, skirtings, architraves, and bespoke flooring"
    ],
    typicalRequirements: [
      "Clear scope of works and photographic schedule of condition",
      "Investigation into existing service locations (gas, water, electrics)",
      "Conservation area checks or Listed Building consents if applicable",
      "Hazard identification (e.g., historical asbestos surveys if pre-2000)"
    ],
    planningAdvice: "Internal domestic refurbishments rarely need planning permission unless modifying a Listed Building, though structural changes always require Building Control sign-off."
  },
  {
    id: "structural-building-works",
    slug: "structural-building-works",
    title: "Structural & Building Works",
    category: "Domestic Structural Works",
    shortDesc: "Specialist domestic building alterations, steel beam installations, foundation work, and load-bearing reconfigurations.",
    fullDesc:
      "Structural integrity is the bedrock of every domestic construction project. Our structural works include careful temporary propping (Acro props and strongboys), precision steel beam (RSJ) placement, chimney breast removals, foundation repairs, and masonry rebuilding carried out strictly to approved engineer specifications.",
    image: "/images/roof-structure.png",
    imageAlt: "Structural timber roof truss framing and masonry scaffolding on domestic building",
    features: [
      "Load-bearing wall removal with certified RSJ structural steel beam installation",
      "Ground floor chimney breast removals and gallows bracket / padstone support",
      "Underpinning, foundation underpinning, and concrete pad casting",
      "Roof structure alterations, dormers, and purlin strengthening",
      "Subfloor joist replacements, damp damp-proof course (DPC) integration"
    ],
    typicalRequirements: [
      "Structural engineer calculations and steel connection details",
      "Building Regulations application (Full Plans or Building Notice)",
      "Party Wall surveyor agreements when working near shared boundary walls",
      "Site safety plan and temporary works propping design"
    ],
    planningAdvice: "All structural alterations affecting load-bearing elements must be inspected and certified by an approved Building Control inspector."
  }
];

export const faqsData: FAQItem[] = [
  {
    question: "How can I enquire about a domestic building project?",
    answer:
      "You can contact GOBIQ LTD directly by calling 07796 195206, emailing gobiuk1989@gmail.com, or submitting our online enquiry form. We will arrange an initial discussion to review your proposed scope of works and property location."
  },
  {
    question: "What information should I provide when requesting a quote?",
    answer:
      "Having architectural drawings, planning approval notices, structural calculations, and a clear description of your target finishes allows us to provide the most accurate assessment. If you are in early planning, share your property address, approximate budget range, and key objectives."
  },
  {
    question: "Can I discuss a project before committing to contracts or planning?",
    answer:
      "Yes. We welcome early-stage conversations to discuss buildability, practical considerations, realistic timelines, and build phases so you can make informed decisions before formal commitments."
  },
  {
    question: "Do you supply unverified pricing or instant online quotes?",
    answer:
      "No. Every domestic property and ground condition is unique. In accordance with professional UK standards, we only provide quotations after reviewing verified project specifications, drawings, and conducting a thorough site visit."
  },
  {
    question: "What geographic areas does GOBIQ LTD cover?",
    answer:
      "GOBIQ LTD is registered at 78 Toll End Road, Tipton, DY4 0EU, and primarily serves domestic residential clients across the West Midlands, Black Country, Birmingham, and surrounding English counties."
  }
];
