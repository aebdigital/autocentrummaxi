import Image from "next/image";

interface MiniHeroProps {
  title: string;
}

export default function MiniHero({ title }: MiniHeroProps) {
  return (
    <section className="relative flex min-h-[30vh] items-center justify-center bg-dark-900 pt-[50px] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/img/hero-main.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <h1 className="text-center font-exo text-4xl font-bold uppercase tracking-wide md:text-5xl">
          {title}
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-lime-400" />
      </div>
    </section>
  );
}
