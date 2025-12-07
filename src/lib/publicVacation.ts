import { supabase, SITE_ID } from "./supabaseClient";

export interface VacationPhoneConfig {
  phone: string;
  enabled: boolean;
}

/**
 * Returns ALL enabled vacation phone numbers for the site.
 */
export async function getVacationPhonesForSite(): Promise<VacationPhoneConfig[]> {
  // 1) Get dovolenka page
  const { data: pages, error: pageError } = await supabase
    .from("pages")
    .select("id")
    .eq("site_id", SITE_ID)
    .eq("slug", "dovolenka")
    .eq("is_public", true);

  if (pageError) {
    console.error("Error loading dovolenka page:", pageError);
    return [];
  }

  if (!pages || pages.length === 0) {
    return [];
  }

  const pageId = pages[0].id;

  // 2) Get ALL vacationPhone blocks for that page (no .single())
  const { data: blocks, error: blockError } = await supabase
    .from("blocks")
    .select("data")
    .eq("page_id", pageId)
    .eq("type", "vacationPhone")
    .order("created_at", { ascending: true });

  if (blockError) {
    console.error("Error loading vacationPhone blocks:", blockError);
    return [];
  }

  if (!blocks || blocks.length === 0) {
    return [];
  }

  // 3) Map to phones where enabled = false (inverted logic: false = show, true = hide)
  const phones: VacationPhoneConfig[] = (blocks as any[])
    .map((b) => b.data || {})
    .filter((d) => !d.enabled && d.phone)
    .map((d) => ({
      phone: String(d.phone),
      enabled: false,
    }));

  return phones;
}

/**
 * Returns first vacation phone config or null (for backwards compatibility)
 */
export async function getVacationPhoneForSite(): Promise<VacationPhoneConfig | null> {
  const phones = await getVacationPhonesForSite();
  return phones.length > 0 ? phones[0] : null;
}
