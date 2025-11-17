import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] bg-gray-400 flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero section.jpg")',
        }}
      />
      <div className="relative container mx-auto px-4">
        <div className="text-left max-w-4xl">
          <h1 className="text-7xl font-bold mb-6 font-jost hero-title">
            VÍTAME VÁS V AUTOBAZÁRI
          </h1>
          <h2 className="text-5xl text-blue-400 font-bold mb-6 font-jost hero-subtitle">
            MT AUTOS
          </h2>
          <p className="text-2xl mb-10 max-w-3xl leading-relaxed font-montserrat">
            Vyberte si spoľahlivé vozidlo z našej ponuky nových, kontrolovaných 
            ojazdených automobilov a nechajte si ho doviesť priamo ku vám.
          </p>
          <div className="flex space-x-6">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded text-white font-bold text-lg font-montserrat cta-btn">
              Pozrite si ponuku
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded text-white font-bold text-lg font-montserrat cta-btn">
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;