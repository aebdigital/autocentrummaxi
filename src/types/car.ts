export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  image: string;
  images?: string[];
  features?: string[];
  engine?: string;
  power?: string;
  bodyType?: string;
  drivetrain?: string;
  vin?: string;
  description?: string;
  source?: 'xml' | 'admin'; // Track if car is from XML feed or admin-added
  reservedUntil?: string; // ISO date string for reservation expiry
  reserved?: boolean; // Flag to show "Rezervováno" badge
  showOnHomepage?: boolean; // Flag to show in "Najnovšie vozidlá" section
  doors?: string;
  color?: string;
  countryOfOrigin?: string; // Country code (SK, CZ, DE, etc.)
  month?: number; // Month of manufacture
  vatDeductible?: boolean;
  priceWithoutVat?: number;
  // PDF documents
  serviceBookPdf?: string; // Path to service book PDF
  cebiaProtocolPdf?: string; // Path to Cebia protocol PDF
}