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
  source?: "xml" | "admin";
  reservedUntil?: string;
  reserved?: boolean;
  sold?: boolean;
  showOnHomepage?: boolean;
  doors?: string;
  seats?: number;
  color?: string;
  countryOfOrigin?: string;
  month?: number;
  vatDeductible?: boolean;
  priceWithoutVat?: number;
  additionalFiles?: { name: string; path: string }[];
  serviceBookPdf?: string;
  cebiaProtocolPdf?: string;
}

export interface PublicCar {
  id: string;
  brand: string;
  model: string;
  year: number | null;
  price: number | null;
  mileage: number | null;
  fuel: string | null;
  transmission: string | null;
  image: string;
  power?: string | null;
  showOnHomepage?: boolean | null;
  reserved?: boolean | null;
  sold?: boolean | null;
  vatDeductible?: boolean | null;
  priceWithoutVat?: number | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}

export interface PublicCarFull extends PublicCar {
  images?: string[] | null;
  features?: string[] | null;
  engine?: string | null;
  bodyType?: string | null;
  drivetrain?: string | null;
  vin?: string | null;
  description?: string | null;
  reservedUntil?: string | null;
  mainImageUrl: string;
  galleryImageUrls: string[];
  doors?: string | null;
  seats?: number | null;
  color?: string | null;
  countryOfOrigin?: string | null;
  month?: number | null;
  serviceBookPdf?: string | null;
  cebiaProtocolPdf?: string | null;
  additionalFiles?: { name: string; path: string }[] | null;
}
