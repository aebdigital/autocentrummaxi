import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] w-full bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/hero section.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-jost tracking-tight mb-6 animate-fade-in-up">
          PRODEJ VYZKOUŠENÝCH VOZIDEL
        </h1>
        <p className="text-lg md:text-2xl font-montserrat max-w-3xl mb-10 text-gray-200 animate-fade-in-up delay-100">
          Naše rodinná firma je na českém trhu již 30 let a má více jak 15.000 spokojených zákazníku.
        </p>
        <Link 
          to="/ponuka" 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg uppercase tracking-wider font-jost"
        >
          Nabídka
        </Link>
      </div>
    </div>
  );
};

export default Hero;