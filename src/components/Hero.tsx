"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollY = window.scrollY;
        heroImageRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-black">
      <div ref={heroImageRef} className="absolute inset-0 h-[120%] w-full will-change-transform">
        <Image
          src="/img/hero-main.jpg"
          alt="Autocentrum Maxi Hero"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="animate-fade-in-up mb-6 font-exo text-4xl font-bold tracking-tight drop-shadow-lg md:text-6xl lg:text-7xl">
          PRODEJ VYZKOUŠENÝCH VOZIDEL
        </h1>
        <p className="animate-fade-in-up mb-10 max-w-3xl font-montserrat text-lg text-gray-100 drop-shadow-md md:text-2xl">
          Naše rodinná firma je na českém trhu již 30 let a má více jak 15.000 spokojených zákazníku.
        </p>
        <Link
          href="/ponuka"
          className="transform rounded-full bg-lime-400 px-10 py-4 font-exo font-bold uppercase tracking-wider text-dark-900 shadow-xl transition-all hover:scale-105 hover:bg-lime-500"
        >
          Nabídka
        </Link>
      </div>
    </div>
  );
}
