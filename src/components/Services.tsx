import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Prodej',
      image: '/img/services/predaj.jpg',
      link: '/ponuka'
    },
    {
      title: 'Dovoz',
      image: '/img/services/dovoz.jpg',
      link: '/kontakt'
    },
    {
      title: 'Financování',
      image: '/img/services/financovani.jpg',
      link: '/financovani'
    },
    {
      title: 'Záruka',
      image: '/img/services/zaruka.jpg',
      link: '/zaruka'
    },
    {
      title: 'Pojištění',
      image: '/img/services/pojisteni.jpg',
      link: '/pojisteni'
    }
  ];

  // We have 5 items, displaying 4 in a row is standard, or maybe flexible grid. 
  // Let's filter or slice, or just display all. The user asked for linking to specific pages.
  // "Dovoz" doesn't have a specific page in the requirements list, so I linked to contact or maybe it's just a service we highlight.
  // I will use a responsive grid.

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 font-exo text-black">NAŠE SLUŽBY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Link 
              to={service.link}
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-bold font-exo text-white mb-2">{service.title}</h3>
                <span className="inline-block px-4 py-2 border border-white/30 rounded-full text-xs font-semibold text-white uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-colors">
                  Více info
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;