export interface CompanyInfo {
  name: string;
  legalName: string;
  companyNumber: string;
  businessType: string;
  sicCode: string;
  sicDescription: string;
  status: string;
  incorporationDate: string;
  registeredOffice: {
    addressLine1: string;
    city: string;
    country: string;
    postcode: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    phoneTel: string;
    email: string;
    website: string;
    websiteUrl: string;
  };
  hours: string;
  tagline: string;
  heroDescription: string;
}

export const companyData: CompanyInfo = {
  name: "GOBIQ LTD",
  legalName: "GOBIQ LTD",
  companyNumber: "17428577",
  businessType: "Construction of domestic buildings",
  sicCode: "41202",
  sicDescription: "Construction of domestic buildings",
  status: "Active",
  incorporationDate: "31 August 2026",
  registeredOffice: {
    addressLine1: "78 Toll End Road",
    city: "Tipton",
    country: "England",
    postcode: "DY4 0EU",
    fullAddress: "78 Toll End Road, Tipton, England, DY4 0EU",
  },
  contact: {
    phone: "07796 195206",
    phoneDisplay: "07796 195206",
    phoneTel: "+447796195206",
    email: "gobiuk1989@gmail.com",
    website: "www.gobiq.co.uk",
    websiteUrl: "https://www.gobiq.co.uk",
  },
  hours: "Monday – Friday: 08:00 – 17:30",
  tagline: "Building Better Homes. Creating Lasting Value.",
  heroDescription:
    "GOBIQ LTD delivers a considered approach to domestic building construction, with a focus on quality workmanship, thoughtful planning, and homes built for everyday living.",
};
