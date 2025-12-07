import { supabase, SITE_ID } from "./supabaseClient";

export interface AnnouncementPopupConfig {
  title: string;
  description: string;
  enabled: boolean;
}

export async function getAnnouncementPopupForSite(): Promise<AnnouncementPopupConfig | null> {
  // 1) find oznamy page for this site
  const { data: page, error: pageError } = await supabase
    .from("pages")
    .select("id")
    .eq("site_id", SITE_ID)
    .eq("slug", "oznamy")
    .eq("is_public", true)
    .single();

  if (pageError || !page) {
    // no oznamy page, or not public
    return null;
  }

  // 2) find announcementPopup block
  const { data: block, error: blockError } = await supabase
    .from("blocks")
    .select("data")
    .eq("page_id", page.id)
    .eq("type", "announcementPopup")
    .single();

  if (blockError || !block) {
    return null;
  }

  const d = (block as any).data || {};
  if (!d.enabled) {
    return null; // popup is disabled in CMS
  }

  return {
    title: d.title ?? "",
    description: d.description ?? "",
    enabled: !!d.enabled,
  };
}
