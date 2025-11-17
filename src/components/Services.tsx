import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Predaj',
      image: '/predaj.jpeg'
    },
    {
      title: 'Dovoz',
      image: '/dovoz.jpg'
    },
    {
      title: 'Leasing',
      image: '/leasing.jpg'
    },
    {
      title: 'Výkup',
      image: '/vykup.webp'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 font-jost">NAŠE SLUŽBY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-2xl font-bold font-jost">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;