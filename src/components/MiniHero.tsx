import React from 'react';

interface MiniHeroProps {
  title: string;
}

const MiniHero: React.FC<MiniHeroProps> = ({ title }) => {
  return (
    <section className="relative min-h-[25vh] bg-dark-900 flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url("/img/hero-main.jpg")',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold font-exo text-center tracking-wide uppercase">
          {title}
        </h1>
        <div className="w-20 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
      </div>
    </section>
  );
};

export default MiniHero;