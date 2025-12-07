import React, { useState, useEffect } from "react";
import { getAnnouncementPopupForSite, AnnouncementPopupConfig } from "../lib/publicAnnouncements";

export const AnnouncementPopup: React.FC = () => {
  const [popup, setPopup] = useState<AnnouncementPopupConfig | null>(null);
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPopup = async () => {
      try {
        const config = await getAnnouncementPopupForSite();
        setPopup(config);
      } catch (error) {
        console.error("Error loading announcement popup:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPopup();
  }, []);

  if (isLoading || !popup || !popup.enabled || !open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-5 relative mx-4">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-700 text-2xl leading-none"
          aria-label="Zavrieť oznam"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-2 font-jost">{popup.title}</h2>
        <p className="text-sm text-gray-700 whitespace-pre-line font-montserrat">
          {popup.description}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementPopup;
