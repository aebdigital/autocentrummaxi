"use client";

import { useState } from "react";

export default function KontaktMap() {
  const [interactive, setInteractive] = useState(false);

  return (
    <div className="relative min-h-[400px] overflow-hidden rounded-lg border border-dark-600 shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.8!2d18.26555!3d49.8466421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e31c98cd8651%3A0xeb942615888194!2sAutocentrum%20Maxi%20.cz!5e0!3m2!1scs!2scz!4v1702000000000!5m2!1scs!2scz"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "600px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Autocentrum Maxi - Mapa"
      />
      {!interactive ? (
        <div
          className="absolute inset-0 cursor-pointer bg-transparent"
          onClick={() => setInteractive(true)}
        >
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="rounded-full border border-dark-600 bg-dark-800/90 px-4 py-2 text-sm font-medium text-white">
              Pro interakci s mapou prosím klikněte
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
