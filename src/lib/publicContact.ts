import { supabase, SITE_ID } from "./supabaseClient";
import { getVacationPhonesForSite } from "./publicVacation";

export interface ContactConfig {
  phones: string[];
  email?: string;
  address?: string;
  openingHours?: string;
}

/**
 * Returns contact info for current site from the kontakt page
 */
export async function getContactForSite(): Promise<ContactConfig | null> {
  // 1) Get kontakt page for this site (no .single() to avoid 406)
  const { data: pages, error: pageError } = await supabase
    .from("pages")
    .select("id")
    .eq("site_id", SITE_ID)
    .eq("slug", "kontakt")
    .eq("is_public", true);

  if (pageError) {
    console.error("Error loading kontakt page:", pageError);
    return null;
  }

  if (!pages || pages.length === 0) {
    return null;
  }

  const pageId = pages[0].id;

  // 2) Get contactInfo block (no .single() to avoid 406)
  const { data: blocks, error: blockError } = await supabase
    .from("blocks")
    .select("data")
    .eq("page_id", pageId)
    .eq("type", "contactInfo");

  if (blockError) {
    console.error("Error loading contactInfo block:", blockError);
    return null;
  }

  if (!blocks || blocks.length === 0) {
    return null;
  }

  const d = (blocks[0] as any).data || {};

  return {
    phones: d.phones ?? [],
    email: d.email ?? "",
    address: d.address ?? "",
    openingHours: d.openingHours ?? "",
  };
}

/**
 * Returns the active phone numbers to display:
 * - If vacation mode is enabled, returns only the vacation phone
 * - Otherwise returns the default phones from kontakt page
 */
export async function getActivePhonesForSite(): Promise<string[]> {
  // Check if vacation mode is active
  const vacationPhones = await getVacationPhonesForSite();

  if (vacationPhones.length > 0) {
    // Vacation mode - return all vacation phones
    return vacationPhones.map(p => p.phone);
  }

  // Normal mode - get phones from kontakt page
  const contactConfig = await getContactForSite();

  if (contactConfig?.phones && contactConfig.phones.length > 0) {
    return contactConfig.phones;
  }

  // No phones configured
  return [];
}
