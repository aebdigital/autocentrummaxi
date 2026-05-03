import Link from "next/link";
import Image from "next/image";

const services = [
  { title: "Prodej", image: "/img/services/predaj.jpg", link: "/ponuka" },
  { title: "Dovoz", image: "/img/services/dovoz.jpg", link: "/kontakt" },
  { title: "Financování", image: "/img/services/financovani.jpg", link: "/financovani" },
  { title: "Záruka", image: "/img/services/zaruka.jpg", link: "/zaruka" },
  { title: "Pojištění", image: "/img/services/pojisteni.jpg", link: "/pojisteni" },
];

export default function Services() {
  return (
    <section className="bg-dark-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center font-exo text-5xl font-bold text-white">NAŠE SLUŽBY</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="group relative h-80 transform cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="mb-2 font-exo text-2xl font-bold text-white">{service.title}</h3>
                <span className="inline-block rounded-full border border-lime-400/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-dark-900">
                  Více info
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
