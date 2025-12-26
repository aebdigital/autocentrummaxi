import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollY = window.scrollY;
        // 20% parallax effect
        heroImageRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[80vh] w-full bg-black overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={heroImageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/img/hero-main.jpg")',
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-exo tracking-tight mb-6 animate-fade-in-up drop-shadow-lg">
          PRODEJ VYZKOUŠENÝCH VOZIDEL
        </h1>
        <p className="text-lg md:text-2xl font-montserrat max-w-3xl mb-10 text-gray-100 animate-fade-in-up delay-100 drop-shadow-md">
          Naše rodinná firma je na českém trhu již 30 let a má více jak 15.000 spokojených zákazníku.
        </p>
        <Link
          to="/ponuka"
          className="bg-lime-400 hover:bg-lime-500 text-dark-900 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl uppercase tracking-wider font-exo"
        >
          Nabídka
        </Link>
      </div>
    </div>
  );
};

export default Hero;