export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.REACT_APP_SITE_URL ||
  "https://autocentrummaxi.cz"
).replace(/\/$/, "");

export const siteName = "Autocentrum Maxi";
export const siteTitle = "Autocentrum Maxi - Prodej a dovoz ojetých vozidel Ostrava";
export const siteDescription =
  "Autocentrum Maxi .cz - rodinná firma s 30letou tradicí. Prodej, dovoz, financování, pojištění a záruka ojetých osobních a užitkových vozidel v Ostravě.";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createCarSlug(car: { brand: string; model: string; year: number | null; id: string }) {
  return `${car.brand}-${car.model}-${car.year ?? ""}-${car.id}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function extractCarIdFromSlug(slug: string) {
  const uuidPattern = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const match = slug.match(uuidPattern);
  if (match) return match[0];
  // fallback for non-uuid ids
  const parts = slug.split("-");
  return parts[parts.length - 1];
}
