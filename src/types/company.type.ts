export enum IndustryType {
  InformationTechnology = "Information Technology",
  HealthcarePharmaceuticals = "Healthcare & Pharmaceuticals",
  FinanceBanking = "Finance & Banking",
  EducationTraining = "Education & Training",
  RetailEcommerce = "Retail & E-commerce",
  ManufacturingProduction = "Manufacturing & Production",
  RealEstatePropertyManagement = "Real Estate & Property Management",
  TransportationLogistics = "Transportation & Logistics",
  EnergyUtilities = "Energy & Utilities",
  HospitalityTourism = "Hospitality & Tourism",
  MediaEntertainment = "Media & Entertainment",
  AgricultureForestry = "Agriculture & Forestry",
  LegalConsultingServices = "Legal & Consulting Services",
  ConstructionEngineering = "Construction & Engineering",
  FoodBeverage = "Food & Beverage",
  NonProfitSocialServices = "Non-Profit & Social Services",
  Telecommunications = "Telecommunications",
  AerospaceDefense = "Aerospace & Defense",
  Automotive = "Automotive",
  GovernmentPublicAdministration = "Government & Public Administration",
  Insurance = "Insurance",
  MarketingAdvertising = "Marketing & Advertising",
  SportsRecreation = "Sports & Recreation",
  EnvironmentalServices = "Environmental Services",
  HumanResourcesStaffing = "Human Resources & Staffing",
  FashionApparel = "Fashion & Apparel",
  ArchitectureDesign = "Architecture & Design",
  Cybersecurity = "Cybersecurity",
  Biotechnology = "Biotechnology",
  Other = "Other",
}

export interface ICompanyProfile {
  user: string; // Changed from Types.ObjectId | IUser to string for simplicity
  logo: File | null;
  yearOfEstablishment: Date;
  companySize: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+";
  address: {
    country: string;
    state: string;
    zipCode: string;
    fullAddress: string;
  };
  industryType: IndustryType;
  businessDescription: string;
  timezone: string;
  homeCurrency: string;
  phone: {
    countryCode: string;
    number: string;
  };
  websiteUrl: string;
  socialMediaUrls?: { platform: string; url: string }[];
}
