import { supabase, SITE_ID } from "./supabaseClient";

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL!;

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
  showOnHomepage?: boolean;
  reserved?: boolean;
}

export interface PublicCarDetail extends PublicCar {
  features?: string[] | null;
  images?: string[] | null;
  engine?: string | null;
  bodyType?: string | null;
  drivetrain?: string | null;
  vin?: string | null;
  description?: string | null;
  reservedUntil?: string | null;
  reserved?: boolean | null;
  doors?: string | null;
  color?: string | null;
  countryOfOrigin?: string | null;
  month?: number | null;
  vatDeductible?: boolean | null;
  priceWithoutVat?: number | null;
  // PDF documents
  serviceBookPdf?: string | null;
  cebiaProtocolPdf?: string | null;
}

// Helper to build full image URL from storage path
export function getImageUrl(imagePath: string): string {
  if (!imagePath) return '';
  // If it's already a full URL, return as-is
  if (imagePath.startsWith('http')) return imagePath;
  // Build URL from Supabase storage
  return `${SUPABASE_URL}/storage/v1/object/public/site-uploads/${imagePath}`;
}

export async function getCarsForPonuka(): Promise<PublicCar[]> {
  const { data, error } = await supabase
    .from("cars")
    .select(
      `
      id,
      brand,
      model,
      year,
      price,
      mileage,
      fuel,
      transmission,
      image,
      power,
      show_on_homepage,
      reserved
    `
    )
    .eq("site_id", SITE_ID)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading cars:", error);
    throw error;
  }

  return (data ?? []).map(car => ({
    id: car.id,
    brand: car.brand,
    model: car.model,
    year: car.year,
    price: car.price,
    mileage: car.mileage,
    fuel: car.fuel,
    transmission: car.transmission,
    image: getImageUrl(car.image),
    power: car.power,
    showOnHomepage: car.show_on_homepage,
    reserved: car.reserved,
  }));
}

export async function getCarById(carId: string): Promise<PublicCarDetail | null> {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", carId)
    .eq("site_id", SITE_ID)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // not found
    console.error("Error loading car:", error);
    throw error;
  }

  if (!data) return null;

  return {
    id: data.id,
    brand: data.brand,
    model: data.model,
    year: data.year,
    price: data.price,
    mileage: data.mileage,
    fuel: data.fuel,
    transmission: data.transmission,
    image: getImageUrl(data.image),
    images: (data.images ?? []).map((img: string) => getImageUrl(img)),
    features: data.features ?? [],
    engine: data.engine,
    power: data.power,
    bodyType: data.body_type,
    drivetrain: data.drivetrain,
    vin: data.vin,
    description: data.description,
    reservedUntil: data.reserved_until,
    reserved: data.reserved,
    showOnHomepage: data.show_on_homepage,
    doors: data.doors,
    color: data.color,
    countryOfOrigin: data.country_of_origin,
    month: data.month,
    vatDeductible: data.vat_deductible,
    priceWithoutVat: data.price_without_vat ? parseFloat(data.price_without_vat) : null,
    // PDF documents - return full URLs
    serviceBookPdf: data.service_book_pdf ? getImageUrl(data.service_book_pdf) : null,
    cebiaProtocolPdf: data.cebia_protocol_pdf ? getImageUrl(data.cebia_protocol_pdf) : null,
  };
}

// Extended interface with computed image URLs
export interface PublicCarFull extends PublicCarDetail {
  mainImageUrl: string;
  galleryImageUrls: string[];
}

export async function getCarFullById(carId: string): Promise<PublicCarFull | null> {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", carId)
    .eq("site_id", SITE_ID)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // not found
    console.error("Error loading car:", error);
    throw error;
  }

  if (!data) return null;

  const mainImageUrl = getImageUrl(data.image);
  const galleryImageUrls = (data.images ?? []).map((img: string) => getImageUrl(img));

  return {
    id: data.id,
    brand: data.brand,
    model: data.model,
    year: data.year,
    price: data.price,
    mileage: data.mileage,
    fuel: data.fuel,
    transmission: data.transmission,
    image: mainImageUrl,
    images: galleryImageUrls,
    features: data.features ?? [],
    engine: data.engine,
    power: data.power,
    bodyType: data.body_type,
    drivetrain: data.drivetrain,
    vin: data.vin,
    description: data.description,
    reservedUntil: data.reserved_until,
    showOnHomepage: data.show_on_homepage,
    mainImageUrl,
    galleryImageUrls,
  };
}
