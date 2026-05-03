import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Autocentrum Maxi",
    short_name: "Autocentrum Maxi",
    description: "Autobazár Autocentrum Maxi Ostrava",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#addf59",
    icons: [
      { src: "/favicon.ico", sizes: "64x64 32x32 24x24 16x16", type: "image/x-icon" },
      { src: "/logo192.png", sizes: "192x192", type: "image/png" },
      { src: "/logo512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
