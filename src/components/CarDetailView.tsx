"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { PublicCarFull } from "@/types/car";
import { useTranslation } from "@/translation/useTranslation";

const icons = {
  pohon: "/icons/pohon.svg",
  palivo: "/icons/palivo.svg",
  km: "/icons/km.svg",
  vykon: "/icons/vykon.svg",
  prevodovka: "/icons/prevodovka.svg",
  motor: "/icons/motor.svg",
  rok: "/icons/rok.svg",
  karoseria: "/icons/karoseria.svg",
  vin: "/icons/VIN.svg",
  seats: "/icons/seats.svg",
  dvere: "/icons/dvere.svg",
  farba: "/icons/farba.svg",
};

const safetyFeatures = [
  "ABS", "ASR", "ESP", "EBD", "EBV", "Centrálne zamykanie", "Imobilizér",
  "Mechanické zabezpečenie", "Brzdový asistent", "Airbagy", "Isofix",
  "Systém kontroly tlaku v pneumatikách (TPMS)", "Varovanie o vzdialenosti (BAS Plus)",
  "Asistent rozoznávania dopravných značiek (ISLW/ISLA)", "Asistent diaľkových svetiel (HBA)",
  "Systém rozoznania únavy vodiča (DAW)", "Asistent rozjazdu do kopca",
];

const comfortFeatures = [
  "Autorádio", "Palubný počítač", "Klimatizácia", "Lakťová opierka", "Navigačný systém",
  "Parkovacie senzory", "Elektrické okná", "Bluetooth handsfree", "Dotykový displej",
  "Vyhrievané sedadlá", "Vyhrievané zrkadlá", "Tempomat", "Adaptívny tempomat",
  "Elektrické zrkadlá", "Bezkľúčové štartovanie", "Kožený paket", "Apple CarPlay",
  "Android Auto", "Nezávislé kúrenie", "Elektrické ovládanie kufra", "Adaptívny podvozok",
  "Doťahovanie dverí", "Stop&start systém",
];

const extraFeatures = [
  "Hmlovky", "Svetelný senzor", "Dažďový senzor", "Strešné okno", "Panoramatická strecha",
  "Hliníkové disky", "Tážne zariadenie", "Sezónne prezutie",
];

const additionalInfo = [
  "Servisná knižka", "STK", "EK", "Kontrola originality", "ODO-Pass",
  "Úplná servisná história", "1. majiteľ", "Možná výmena", "Ako nové kúpené v SR",
  "Veterán", "Tuning", "Defektný motor alebo prevodovka",
];

function categorizeFeatures(features: string[]) {
  const safety: string[] = [];
  const comfort: string[] = [];
  const extra: string[] = [];
  const additional: string[] = [];
  const other: string[] = [];

  features.forEach((feature) => {
    if (safetyFeatures.some((sf) => feature.includes(sf) || sf.includes(feature))) {
      safety.push(feature);
    } else if (comfortFeatures.some((cf) => feature.includes(cf) || cf.includes(feature))) {
      comfort.push(feature);
    } else if (extraFeatures.some((ef) => feature.includes(ef) || ef.includes(feature))) {
      extra.push(feature);
    } else if (additionalInfo.some((ai) => feature.includes(ai) || ai.includes(feature))) {
      additional.push(feature);
    } else {
      other.push(feature);
    }
  });

  return { safety, comfort, extra, additional, other };
}

interface CarDetailViewProps {
  car: PublicCarFull;
}

export default function CarDetailView({ car }: CarDetailViewProps) {
  const { t, tEquipment } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = car.galleryImageUrls.length > 0 ? car.galleryImageUrls : [car.mainImageUrl];

  const isReserved = car.reserved || (car.reservedUntil ? new Date(car.reservedUntil) > new Date() : false);
  const isSold = car.sold;
  const yearDisplay = car.month ? `${car.month}/${car.year}` : car.year;

  const transmissionDisplay = (() => {
    const tr = car.transmission ?? "";
    if (tr.toLowerCase() === "manualna" || tr === "Manuální") return t("manualna");
    if (tr.toLowerCase() === "automaticka" || tr === "Automatická") return t("automaticka");
    return tr;
  })();

  const basicData = [
    { label: t("labelRokVyroby"), value: yearDisplay, icon: icons.rok },
    { label: t("labelKilometre"), value: `${(car.mileage ?? 0).toLocaleString()} km`, icon: icons.km },
    { label: t("labelPalivo"), value: car.fuel, icon: icons.palivo },
    { label: t("labelPrevodovka"), value: transmissionDisplay, icon: icons.prevodovka },
    { label: t("labelVykon"), value: car.power, icon: icons.vykon },
    { label: t("labelObjemMotoru"), value: car.engine, icon: icons.motor },
    { label: t("labelKaroseria"), value: car.bodyType, icon: icons.karoseria },
    { label: t("labelPohon"), value: car.drivetrain, icon: icons.pohon },
    { label: t("labelDvere"), value: car.doors, icon: icons.dvere },
    { label: t("labelPocetMiest"), value: car.seats?.toString(), icon: icons.seats },
    { label: t("labelFarba"), value: car.color, icon: icons.farba },
    { label: t("labelKrajinaPovodu"), value: car.countryOfOrigin, icon: icons.vin },
    { label: t("labelVin"), value: car.vin, icon: icons.vin },
  ].filter((item) => item.value);

  const categorizedFeatures = car.features && car.features.length > 0 ? categorizeFeatures(car.features) : null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-dark-600 bg-dark-800 p-2 shadow-sm">
            <div
              className="relative mb-2 h-[400px] cursor-pointer md:h-[500px]"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={images[0]}
                alt="Main car view"
                fill
                className="rounded-xl object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute bottom-4 right-4 rounded-full bg-dark-900/80 px-3 py-1 font-montserrat text-sm text-white">
                + {images.length} {t("fotografii")}
              </div>
            </div>
            {images.length > 1 ? (
              <div className="grid grid-cols-4 gap-2">
                {images.slice(1, 5).map((img, i) => (
                  <div key={i} className="relative h-24 cursor-pointer" onClick={() => openLightbox(i + 1)}>
                    <Image
                      src={img}
                      alt={`Gallery thumbnail ${i}`}
                      fill
                      className="rounded-lg object-cover transition-opacity hover:opacity-80"
                      sizes="(max-width: 1024px) 25vw, 15vw"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="rounded-2xl border border-dark-600 bg-dark-800 p-8 shadow-sm">
            <h2 className="mb-6 border-b border-dark-600 pb-4 font-exo text-2xl font-bold text-white">
              {t("technickeParametre")}
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {basicData.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dark-700 p-2">
                    <Image src={item.icon} alt={item.label} width={24} height={24} className="icon-lime" />
                  </div>
                  <div>
                    <p className="font-montserrat text-xs font-bold uppercase text-gray-500">{item.label}</p>
                    <p className="font-montserrat font-semibold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {car.description ? (
            <div className="rounded-2xl border border-dark-600 bg-dark-800 p-8 shadow-sm">
              <h2 className="mb-6 border-b border-dark-600 pb-4 font-exo text-2xl font-bold text-white">
                {t("popis")}
              </h2>
              <p className="whitespace-pre-line font-montserrat text-gray-300">{car.description}</p>
            </div>
          ) : null}

          {categorizedFeatures ? (
            <div className="rounded-2xl border border-dark-600 bg-dark-800 p-8 shadow-sm">
              <h2 className="mb-6 border-b border-dark-600 pb-4 font-exo text-2xl font-bold text-white">
                {t("vybavaVozidla")}
              </h2>

              <FeatureSection title={t("bezpecnostLabel")} items={categorizedFeatures.safety} translate={tEquipment} />
              <FeatureSection title={t("komfortLabel")} items={categorizedFeatures.comfort} translate={tEquipment} />
              <FeatureSection title={t("dalsiaVybava")} items={categorizedFeatures.extra} translate={tEquipment} />
              <FeatureSection title={t("doplnujuceUdaje")} items={categorizedFeatures.additional} translate={tEquipment} />
              <FeatureSection title={t("ostatni")} items={categorizedFeatures.other} translate={tEquipment} />
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl border border-dark-600 bg-dark-800 p-6 shadow-lg">
              <h1 className="mb-2 font-exo text-2xl font-bold text-white">
                {car.brand} {car.model}
              </h1>
              <p className="mb-6 font-montserrat text-gray-400">
                {yearDisplay} • {(car.mileage ?? 0).toLocaleString()} km
              </p>

              <div className="mb-2 flex flex-wrap items-center gap-3">
                <div className="font-exo text-4xl font-bold text-lime-400">
                  {(car.price ?? 0) > 0 ? `${(car.price ?? 0).toLocaleString()} Kč` : t("naDotaz")}
                </div>
                {isReserved && !isSold ? (
                  <div className="rounded-lg bg-red-600 px-3 py-1 font-exo text-lg font-bold text-white shadow-lg">
                    {t("rezervovane").toUpperCase()}
                  </div>
                ) : null}
                {isSold ? (
                  <div className="rounded-lg bg-red-600 px-3 py-1 font-exo text-lg font-bold text-white shadow-lg">
                    {t("predane").toUpperCase()}
                  </div>
                ) : null}
              </div>
              {(car.price ?? 0) > 0 && car.vatDeductible ? (
                car.priceWithoutVat && car.priceWithoutVat > 0 ? (
                  <p className="mb-6 font-montserrat text-sm text-gray-400">
                    {t("odpocetDphLabel")}: {car.priceWithoutVat.toLocaleString()} Kč
                  </p>
                ) : (
                  <p className="mb-6 font-montserrat text-sm text-gray-500">{t("moznostOdpoctuDph")}</p>
                )
              ) : null}

              <div className="space-y-3">
                <a
                  href="tel:+420702198267"
                  className="block w-full rounded-xl bg-lime-400 py-4 text-center font-montserrat font-bold uppercase text-dark-900 transition-colors hover:bg-lime-500"
                >
                  +420 702 198 267
                </a>
                <Link
                  href="/kontakt"
                  className="block w-full rounded-xl border-2 border-lime-400 bg-transparent py-4 text-center font-montserrat font-bold uppercase text-lime-400 transition-colors hover:bg-lime-400 hover:text-dark-900"
                >
                  {t("napisatPredajcovi")}
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-dark-600 bg-dark-700 p-6">
              <h3 className="mb-4 font-exo font-bold text-white">{t("precoKupitUNas")}</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 font-montserrat text-sm text-gray-300">
                <li className="flex items-center"><span className="mr-2 text-lime-400">✓</span> {t("zarukaPovoduVozidla")}</li>
                <li className="flex items-center"><span className="mr-2 text-lime-400">✓</span> {t("vyhodneFinancovanie")}</li>
                <li className="flex items-center"><span className="mr-2 text-lime-400">✓</span> {t("poistenieSoZlavou")}</li>
                <li className="flex items-center"><span className="mr-2 text-lime-400">✓</span> {t("technickaKontrolaVCene")}</li>
              </ul>
            </div>

            {(car.serviceBookPdf || car.cebiaProtocolPdf || (car.additionalFiles && car.additionalFiles.length > 0)) ? (
              <div className="rounded-2xl border border-dark-600 bg-dark-700 p-6">
                <h3 className="mb-4 font-exo font-bold text-white">{t("dokumenty")}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {car.serviceBookPdf ? (
                    <DocLink href={car.serviceBookPdf} title={t("servisnaKnizka")} subtitle="PDF" />
                  ) : null}
                  {car.cebiaProtocolPdf ? (
                    <DocLink href={car.cebiaProtocolPdf} title={t("cebiaProtokol")} subtitle="PDF" />
                  ) : null}
                  {car.additionalFiles?.map((file, idx) => (
                    <DocLink
                      key={idx}
                      href={file.path}
                      title={file.name}
                      subtitle={file.path.toLowerCase().endsWith(".pdf") ? "PDF" : t("subor")}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button type="button" className="absolute right-4 top-4 text-4xl text-white">×</button>
          <div className="relative h-full w-full max-w-6xl p-4">
            <Image
              src={images[lightboxIndex]}
              alt={`Full view of car ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-4xl text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
                }}
              >
                ←
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-4xl text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % images.length);
                }}
              >
                →
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function FeatureSection({
  title,
  items,
  translate,
}: {
  title: string;
  items: string[];
  translate: (s: string) => string;
}) {
  if (items.length === 0) return null;
  return (
    <div className="mb-6">
      <h3 className="mb-4 font-exo text-lg font-bold text-lime-400">{title}</h3>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((feature, i) => (
          <li key={i} className="flex items-center font-montserrat text-gray-300">
            <span className="mr-2 text-lime-400">✓</span>
            {translate(feature)}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DocLink({ href, title, subtitle }: { href: string; title: string; subtitle: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl bg-dark-800 p-3 transition-colors hover:bg-dark-600"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/20">
        <svg className="h-5 w-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <div className="flex-1 text-left">
        <p className="truncate font-montserrat font-semibold text-white">{title}</p>
        <p className="font-montserrat text-sm text-gray-400">{subtitle}</p>
      </div>
      <svg className="h-5 w-5 text-gray-400 transition-colors group-hover:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  );
}
