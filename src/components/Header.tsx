"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/ponuka", label: "Nabídka" },
  { href: "/financovani", label: "Financování" },
  { href: "/pojisteni", label: "Pojištění" },
  { href: "/zaruka", label: "Záruka" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-dark-700 bg-dark-900/95 text-white shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="Autocentrum Maxi – domov"
            className="block transition-opacity hover:opacity-90"
          >
            <Image
              src="/autocentrum-maxi-logo.png"
              alt="Autocentrum Maxi"
              width={1159}
              height={382}
              priority
              className="h-12 w-auto mix-blend-screen sm:h-14"
            />
          </Link>
        </div>

        <nav className="hidden items-center space-x-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-exo text-sm font-bold uppercase tracking-wider transition-colors hover:text-lime-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <a
            href="tel:+420702198267"
            className="mr-4 hidden rounded-full bg-lime-400 px-4 py-2 text-sm font-bold text-dark-900 transition-colors hover:bg-lime-500 lg:block"
          >
            +420 702 198 267
          </a>

          <button
            type="button"
            className="p-2 text-white focus:outline-none lg:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Otvoriť menu"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 z-[60] h-[100dvh] w-full transform bg-dark-900 transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between border-b border-dark-700 bg-dark-900 px-4 py-4">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Autocentrum Maxi – domov"
            className="block transition-opacity hover:opacity-90"
          >
            <Image
              src="/autocentrum-maxi-logo.png"
              alt="Autocentrum Maxi"
              width={1159}
              height={382}
              className="h-12 w-auto mix-blend-screen"
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white focus:outline-none"
            aria-label="Zavrieť menu"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex h-full flex-col space-y-6 bg-dark-900 p-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-exo text-3xl font-bold text-white hover:text-lime-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
