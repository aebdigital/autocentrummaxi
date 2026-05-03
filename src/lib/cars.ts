import { supabase, SITE_ID, getImageUrl } from "./supabase";
import type { Car, PublicCar, PublicCarFull } from "@/types/car";

export const carSelect = `
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
  reserved,
  sold,
  vat_deductible,
  price_without_vat,
  updated_at,
  created_at
`;

export function toCar(car: PublicCar): Car {
  return {
    id: car.id,
    brand: car.brand,
    model: car.model,
    year: car.year ?? 0,
    price: car.price ?? 0,
    mileage: car.mileage ?? 0,
    fuel: car.fuel ?? "",
    transmission: car.transmission ?? "",
    image: car.image,
    power: car.power ?? undefined,
    showOnHomepage: car.showOnHomepage ?? false,
    reserved: car.reserved ?? false,
    sold: car.sold ?? false,
    vatDeductible: car.vatDeductible ?? false,
    priceWithoutVat: car.priceWithoutVat ?? undefined,
  };
}

function mapPublicCar(data: any): PublicCar {
  return {
    id: data.id,
    brand: (data.brand ?? "").trim(),
    model: data.model,
    year: data.year,
    price: data.price,
    mileage: data.mileage,
    fuel: data.fuel,
    transmission: data.transmission,
    image: getImageUrl(data.image),
    power: data.power,
    showOnHomepage: data.show_on_homepage,
    reserved: data.reserved,
    sold: data.sold,
    vatDeductible: data.vat_deductible,
    priceWithoutVat: data.price_without_vat ? parseFloat(String(data.price_without_vat)) : null,
    updatedAt: data.updated_at,
    createdAt: data.created_at,
  };
}

export async function getCarsForPonuka(): Promise<Car[]> {
  const { data, error } = await supabase
    .from("cars")
    .select(carSelect)
    .eq("site_id", SITE_ID)
    .is("deleted_at", null)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading cars:", error);
    return [];
  }

  return (data ?? []).map(mapPublicCar).map(toCar);
}

export async function getCarsForSitemap(): Promise<PublicCar[]> {
  const { data, error } = await supabase
    .from("cars")
    .select(carSelect)
    .eq("site_id", SITE_ID)
    .is("deleted_at", null)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading sitemap cars:", error);
    return [];
  }

  return (data ?? []).map(mapPublicCar);
}

export async function getCarFullById(carId: string): Promise<PublicCarFull | null> {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", carId)
    .eq("site_id", SITE_ID)
    .is("deleted_at", null)
    .single();

  if (error) {
    if (error.code !== "PGRST116") {
      console.error("Error loading car:", error);
    }
    return null;
  }

  if (!data) return null;

  const mainImageUrl = getImageUrl(data.image);
  const galleryImageUrls = (data.images ?? []).map((img: string) => getImageUrl(img));

  return {
    id: data.id,
    brand: (data.brand ?? "").trim(),
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
    reserved: data.reserved,
    sold: data.sold,
    vatDeductible: data.vat_deductible,
    priceWithoutVat: data.price_without_vat ? parseFloat(String(data.price_without_vat)) : null,
    doors: data.doors,
    seats: data.seats,
    color: data.color,
    countryOfOrigin: data.country_of_origin,
    month: data.month,
    serviceBookPdf: data.service_book_pdf ? getImageUrl(data.service_book_pdf) : null,
    cebiaProtocolPdf: data.cebia_protocol_pdf ? getImageUrl(data.cebia_protocol_pdf) : null,
    additionalFiles: data.additional_files
      ? data.additional_files.map((f: any) => ({ name: f.name, path: getImageUrl(f.path) }))
      : null,
    mainImageUrl,
    galleryImageUrls,
    updatedAt: data.updated_at,
    createdAt: data.created_at,
  };
}
