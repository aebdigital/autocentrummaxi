import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MiniHero from '../components/MiniHero';
import { Car } from '../types/car';
import { getCarById } from '../lib/publicCars';
import { useTranslation } from '../hooks/useTranslation';

// Import local SVG icons
import pohonIcon from '../images/pohon.svg';
import palivoIcon from '../images/palivo.svg';
import kmIcon from '../images/km.svg';
import vykonIcon from '../images/vykon.svg';
import prevodovkaIcon from '../images/prevodovka.svg';
import motorIcon from '../images/motor.svg';
import rokIcon from '../images/rok.svg';
import karoseriaIcon from '../images/karoseria.svg';
import vinIcon from '../images/VIN.svg';

interface CarDetailPageProps {
  cars: Car[];
}

const CarDetailPage: React.FC<CarDetailPageProps> = ({ cars }) => {
  const { slug } = useParams<{ slug: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { t, tEquipment } = useTranslation();

  useEffect(() => {
    async function loadCar() {
      if (!slug) {
        setIsLoading(false);
        return;
      }

      // UUID pattern: 8-4-4-4-12 hex characters
      const uuidPattern = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      const uuidMatch = slug.match(uuidPattern);

      let carId: string;
      if (uuidMatch) {
        // It's a Supabase car with UUID
        carId = uuidMatch[0];
      } else {
        // It's a hardcoded car with simple numeric ID
        const slugParts = slug.split('-');
        carId = slugParts[slugParts.length - 1];
      }

      // Always fetch full car details from Supabase to get description, features, etc.
      try {
        const supabaseCar = await getCarById(carId);
        if (supabaseCar) {
          setCar({
            id: supabaseCar.id,
            brand: supabaseCar.brand.trim(),
            model: supabaseCar.model,
            year: supabaseCar.year ?? 0,
            price: supabaseCar.price ?? 0,
            mileage: supabaseCar.mileage ?? 0,
            fuel: supabaseCar.fuel ?? '',
            transmission: supabaseCar.transmission ?? '',
            image: supabaseCar.image,
            images: supabaseCar.images ?? undefined,
            features: supabaseCar.features ?? undefined,
            engine: supabaseCar.engine ?? undefined,
            power: supabaseCar.power ?? undefined,
            bodyType: supabaseCar.bodyType ?? undefined,
            drivetrain: supabaseCar.drivetrain ?? undefined,
            vin: supabaseCar.vin ?? undefined,
            description: supabaseCar.description ?? undefined,
            showOnHomepage: supabaseCar.showOnHomepage,
            doors: supabaseCar.doors ?? undefined,
            color: supabaseCar.color ?? undefined,
            countryOfOrigin: supabaseCar.countryOfOrigin ?? undefined,
            month: supabaseCar.month ?? undefined,
            vatDeductible: supabaseCar.vatDeductible ?? undefined,
            priceWithoutVat: supabaseCar.priceWithoutVat ?? undefined,
            // PDF documents
            serviceBookPdf: supabaseCar.serviceBookPdf ?? undefined,
            cebiaProtocolPdf: supabaseCar.cebiaProtocolPdf ?? undefined,
            reserved: supabaseCar.reserved,
            reservedUntil: supabaseCar.reservedUntil ?? undefined,
          });
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.error('Failed to load car from Supabase:', error);
      }

      // Fallback to cars prop if Supabase fetch failed
      const foundCar = cars.find(c => c.id === carId);
      if (foundCar) {
        setCar(foundCar);
      }

      setIsLoading(false);
    }

    loadCar();
  }, [slug, cars]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900">
        <MiniHero title={t('nacitam')} />
        <div className="flex justify-center items-center py-20">
          <div className="text-2xl font-montserrat text-white">{t('nacitamVozidlo')}</div>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-dark-900">
        <MiniHero title={t('vozidloNenajdene')} />
        <div className="text-center py-20">
          <Link to="/ponuka" className="text-lime-400 hover:text-lime-500 hover:underline">{t('spatNaPonuku')}</Link>
        </div>
      </div>
    );
  }

  const images = car.images && car.images.length > 0 ? car.images : [car.image];

  const icons = {
    'Pohon': pohonIcon,
    'Palivo': palivoIcon,
    'Kilometry': kmIcon,
    'Výkon': vykonIcon,
    'Převodovka': prevodovkaIcon,
    'Objem motoru': motorIcon,
    'Rok výroby': rokIcon,
    'Karoserie': karoseriaIcon,
    'VIN': vinIcon,
  };

  const isReserved = car.reserved || (car.reservedUntil && new Date(car.reservedUntil) > new Date());

  // Format year with month if available
  const yearDisplay = car.month ? `${car.month}/${car.year}` : car.year;

  const basicData = [
    { label: t('labelRokVyroby'), value: yearDisplay, icon: icons['Rok výroby'] },
    { label: t('labelKilometre'), value: `${car.mileage.toLocaleString()} km`, icon: icons['Kilometry'] },
    { label: t('labelPalivo'), value: car.fuel, icon: icons['Palivo'] },
    { label: t('labelPrevodovka'), value: (car.transmission.toLowerCase() === 'manualna' || car.transmission === 'Manuální') ? t('manualna') : (car.transmission.toLowerCase() === 'automaticka' || car.transmission === 'Automatická') ? t('automaticka') : car.transmission, icon: icons['Převodovka'] },
    { label: t('labelVykon'), value: car.power, icon: icons['Výkon'] },
    { label: t('labelObjemMotoru'), value: car.engine, icon: icons['Objem motoru'] },
    { label: t('labelKaroseria'), value: car.bodyType, icon: icons['Karoserie'] },
    { label: t('labelPohon'), value: car.drivetrain, icon: icons['Pohon'] },
    { label: t('labelDvere'), value: car.doors, icon: icons['Karoserie'] },
    { label: t('labelFarba'), value: car.color, icon: icons['Karoserie'] },
    { label: t('labelKrajinaPovodu'), value: car.countryOfOrigin, icon: icons['VIN'] },
    { label: t('labelVin'), value: car.vin, icon: icons['VIN'] },
  ].filter(item => item.value);

  // Categorize features
  const safetyFeatures = [
    'ABS', 'ASR', 'ESP', 'EBD', 'EBV', 'Centrálne zamykanie', 'Imobilizér',
    'Mechanické zabezpečenie', 'Brzdový asistent', 'Airbagy', 'Isofix',
    'Systém kontroly tlaku v pneumatikách (TPMS)', 'Varovanie o vzdialenosti (BAS Plus)',
    'Asistent rozoznávania dopravných značiek (ISLW/ISLA)', 'Asistent diaľkových svetiel (HBA)',
    'Systém rozoznania únavy vodiča (DAW)', 'Asistent rozjazdu do kopca'
  ];

  const comfortFeatures = [
    'Autorádio', 'Palubný počítač', 'Klimatizácia', 'Lakťová opierka', 'Navigačný systém',
    'Parkovacie senzory', 'Elektrické okná', 'Bluetooth handsfree', 'Dotykový displej',
    'Vyhrievané sedadlá', 'Vyhrievané zrkadlá', 'Tempomat', 'Adaptívny tempomat',
    'Elektrické zrkadlá', 'Bezkľúčové štartovanie', 'Kožený paket', 'Apple CarPlay',
    'Android Auto', 'Nezávislé kúrenie', 'Elektrické ovládanie kufra', 'Adaptívny podvozok',
    'Doťahovanie dverí', 'Stop&start systém'
  ];

  const extraFeatures = [
    'Hmlovky', 'Svetelný senzor', 'Dažďový senzor', 'Strešné okno', 'Panoramatická strecha',
    'Hliníkové disky', 'Tážne zariadenie', 'Sezónne prezutie'
  ];

  const additionalInfo = [
    'Servisná knižka', 'STK', 'EK', 'Kontrola originality', 'ODO-Pass',
    'Úplná servisná história', '1. majiteľ', 'Možná výmena', 'Ako nové kúpené v SR',
    'Veterán', 'Tuning', 'Defektný motor alebo prevodovka'
  ];

  const categorizeFeatures = (features: string[]) => {
    const safety: string[] = [];
    const comfort: string[] = [];
    const extra: string[] = [];
    const additional: string[] = [];
    const other: string[] = [];

    features.forEach(feature => {
      if (safetyFeatures.some(sf => feature.includes(sf) || sf.includes(feature))) {
        safety.push(feature);
      } else if (comfortFeatures.some(cf => feature.includes(cf) || cf.includes(feature))) {
        comfort.push(feature);
      } else if (extraFeatures.some(ef => feature.includes(ef) || ef.includes(feature))) {
        extra.push(feature);
      } else if (additionalInfo.some(ai => feature.includes(ai) || ai.includes(feature))) {
        additional.push(feature);
      } else {
        other.push(feature);
      }
    });

    return { safety, comfort, extra, additional, other };
  };

  const categorizedFeatures = car.features ? categorizeFeatures(car.features) : null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title={`${car.brand} ${car.model}`} />

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN: Gallery & Specs */}
          <div className="lg:col-span-2 space-y-8">

            {/* Main Gallery Display */}
            <div className="bg-dark-800 rounded-2xl shadow-sm overflow-hidden p-2 border border-dark-600">
              <div className="relative h-[400px] md:h-[500px] mb-2 cursor-pointer" onClick={() => openLightbox(0)}>
                <img src={images[0]} alt="Main" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-4 right-4 bg-dark-900/80 text-white px-3 py-1 rounded-full text-sm font-montserrat">
                  + {images.length} {t('fotografii')}
                </div>
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {images.slice(1, 5).map((img, i) => (
                  <div key={i} className="h-24 cursor-pointer" onClick={() => openLightbox(i + 1)}>
                    <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-dark-800 rounded-2xl shadow-sm p-8 border border-dark-600">
              <h2 className="text-2xl font-bold font-exo mb-6 border-b border-dark-600 pb-4 text-white">{t('technickeParametre')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {basicData.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-2 bg-dark-700 rounded-lg">
                      <img src={item.icon} alt={item.label} className="w-6 h-6 icon-lime" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold font-montserrat">{item.label}</p>
                      <p className="text-white font-semibold font-montserrat">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            {car.description && (
              <div className="bg-dark-800 rounded-2xl shadow-sm p-8 border border-dark-600">
                <h2 className="text-2xl font-bold font-exo mb-6 border-b border-dark-600 pb-4 text-white">{t('popis')}</h2>
                <p className="text-gray-300 font-montserrat whitespace-pre-line">{car.description}</p>
              </div>
            )}

            {/* Features - Categorized */}
            {categorizedFeatures && (
              <div className="bg-dark-800 rounded-2xl shadow-sm p-8 border border-dark-600">
                <h2 className="text-2xl font-bold font-exo mb-6 border-b border-dark-600 pb-4 text-white">{t('vybavaVozidla')}</h2>

                {/* Safety */}
                {categorizedFeatures.safety.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold font-exo mb-4 text-lime-400">{t('bezpecnostLabel')}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {categorizedFeatures.safety.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300 font-montserrat">
                          <span className="text-lime-400 mr-2">✓</span>
                          {tEquipment(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Comfort */}
                {categorizedFeatures.comfort.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold font-exo mb-4 text-lime-400">{t('komfortLabel')}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {categorizedFeatures.comfort.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300 font-montserrat">
                          <span className="text-lime-400 mr-2">✓</span>
                          {tEquipment(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Extra */}
                {categorizedFeatures.extra.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold font-exo mb-4 text-lime-400">{t('dalsiaVybava')}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {categorizedFeatures.extra.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300 font-montserrat">
                          <span className="text-lime-400 mr-2">✓</span>
                          {tEquipment(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Additional Info */}
                {categorizedFeatures.additional.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold font-exo mb-4 text-lime-400">{t('doplnujuceUdaje')}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {categorizedFeatures.additional.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300 font-montserrat">
                          <span className="text-lime-400 mr-2">✓</span>
                          {tEquipment(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Other uncategorized features */}
                {categorizedFeatures.other.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold font-exo mb-4 text-lime-400">{t('ostatni')}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {categorizedFeatures.other.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300 font-montserrat">
                          <span className="text-lime-400 mr-2">✓</span>
                          {tEquipment(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sticky Info Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Price Card */}
              <div className="bg-dark-800 rounded-2xl shadow-lg p-6 border border-dark-600">
                <h1 className="text-2xl font-bold font-exo mb-2 text-white">{car.brand} {car.model}</h1>
                <p className="text-gray-400 mb-6 font-montserrat">{yearDisplay} • {car.mileage.toLocaleString()} km</p>

                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <div className="text-4xl font-bold text-lime-400 font-exo">
                    {car.price > 0 ? `${car.price.toLocaleString()} Kč` : t('naDotaz')}
                  </div>
                  {isReserved && (
                    <div className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold font-exo text-lg shadow-lg">
                      {t('rezervovane').toUpperCase()}
                    </div>
                  )}
                </div>
                {car.vatDeductible && car.priceWithoutVat && car.priceWithoutVat > 0 ? (
                  <p className="text-gray-400 text-sm mb-6 font-montserrat">
                    {t('odpocetDphLabel')}: {car.priceWithoutVat.toLocaleString()} Kč
                  </p>
                ) : car.price > 0 ? (
                  <p className="text-gray-500 text-sm mb-6 font-montserrat">{t('moznostOdpoctuDph')}</p>
                ) : null}

                <div className="space-y-3">
                  <a href="tel:+420702198267" className="block w-full bg-lime-400 text-dark-900 text-center py-4 rounded-xl font-bold uppercase hover:bg-lime-500 transition-colors font-montserrat">
                    +420 702 198 267
                  </a>
                  <Link to="/kontakt" className="block w-full bg-transparent border-2 border-lime-400 text-lime-400 text-center py-4 rounded-xl font-bold uppercase hover:bg-lime-400 hover:text-dark-900 transition-colors font-montserrat">
                    {t('napisatPredajcovi')}
                  </Link>
                </div>
              </div>

              {/* Assurance Card */}
              <div className="bg-dark-700 rounded-2xl p-6 border border-dark-600">
                <h3 className="font-bold mb-4 font-exo text-white">{t('precoKupitUNas')}</h3>
                <ul className="space-y-3 text-sm text-gray-300 font-montserrat">
                  <li className="flex items-center"><span className="text-lime-400 mr-2">✓</span> {t('zarukaPovoduVozidla')}</li>
                  <li className="flex items-center"><span className="text-lime-400 mr-2">✓</span> {t('vyhodneFinancovanie')}</li>
                  <li className="flex items-center"><span className="text-lime-400 mr-2">✓</span> {t('poistenieSoZlavou')}</li>
                  <li className="flex items-center"><span className="text-lime-400 mr-2">✓</span> {t('technickaKontrolaVCene')}</li>
                </ul>
              </div>

              {/* PDF Documents */}
              {(car.serviceBookPdf || car.cebiaProtocolPdf) && (
                <div className="bg-dark-700 rounded-2xl p-6 border border-dark-600">
                  <h3 className="font-bold mb-4 font-exo text-white">{t('dokumenty')}</h3>
                  <div className="space-y-3">
                    {car.serviceBookPdf && (
                      <a
                        href={car.serviceBookPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-dark-800 rounded-xl hover:bg-dark-600 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-lime-400/20 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold font-montserrat">{t('servisnaKnizka')}</p>
                          <p className="text-gray-400 text-sm font-montserrat">PDF</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-lime-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    )}
                    {car.cebiaProtocolPdf && (
                      <a
                        href={car.cebiaProtocolPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-dark-800 rounded-xl hover:bg-dark-600 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-lime-400/20 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold font-montserrat">{t('cebiaProtokol')}</p>
                          <p className="text-gray-400 text-sm font-montserrat">PDF</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-lime-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-4 right-4 text-white text-4xl">&times;</button>
          <img src={images[lightboxIndex]} alt="Full" className="max-w-full max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl p-2"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length); }}
              >←</button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl p-2"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length); }}
              >→</button>
            </>
          )}
        </div>
      )}

    </div>
  );
};

export default CarDetailPage;