import { ShoppingBag, Paintbrush, Boxes, Truck, Pencil } from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = [
  { src: "/images/goku-red.png", alt: "Figura coleccionable de Goku" },
  { src: "/images/dragon-red.png", alt: "Figura impresa en 3D de un dragón" },
  { src: "/images/grinch-red.png", alt: "Figura impresa en 3D del grinch" },
];

function HomePage() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setActiveImage((s) => {
        if (s < heroImages.length - 1) return s + 1;
        return 0;
      });
    }, 5000);
    return () => clearTimeout(timerId);
  }, [activeImage]);

  return (
    <div className="flex flex-col">
      <div className="relative isolate grid overflow-hidden px-4 py-4 md:min-h-95 md:grid-flow-col md:grid-cols-2 md:grid-rows-3 md:gap-y-3 md:px-8 xl:min-h-105 xl:gap-y-6 xl:px-60 xl:py-14">
        <h1 className="relative z-10 col-start-1 font-heading text-4xl font-bold md:text-5xl xl:text-7xl">
          Figuras unicas <br />
          <span className="relative z-10 font-heading text-4xl font-bold text-primary md:text-5xl xl:text-7xl">
            impresas en 3D
          </span>
        </h1>

        <p className="relative z-10 col-start-1 text-xl xl:text-2xl">
          Coleccionables, decoracion y<br />
          figuras personalizadas,
          <br /> impresas con alta calidad y detalle.
        </p>
        <div className="relative aspect-video overflow-hidden md:absolute md:inset-y-0 md:right-0 md:z-0 md:aspect-auto md:w-[68%]">
          {heroImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              aria-hidden={index !== activeImage}
              className={`absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom,black_75%,transparent)] object-cover object-right motion-safe:transition-opacity motion-safe:duration-500 md:mask-[linear-gradient(to_right,transparent,black_45%)] ${index === activeImage ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        <div
          role="group"
          aria-label="Seleccionar imagen del Hero"
          className="flex justify-center md:absolute md:inset-x-0 md:bottom-3 md:z-20"
        >
          {heroImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Mostrar ${image.alt.toLowerCase()}`}
              aria-pressed={index === activeImage}
              onClick={() => setActiveImage(index)}
              className="grid size-8 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-primary"
            >
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${
                  index === activeImage ? "bg-primary" : "bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="z-10 col-start-1 flex items-center justify-between gap-3 md:justify-start">
          <button className="flex items-center gap-x-1 rounded-md border border-primary bg-primary px-4 py-2 text-sm duration-300 hover:border hover:border-text-primary hover:bg-transparent md:text-lg xl:px-8 xl:py-4 xl:text-2xl">
            <ShoppingBag />
            Ver catalogo
          </button>
          <button className="flex items-center gap-x-1 rounded-md border border-text-primary bg-transparent px-4 py-2 text-sm duration-300 hover:bg-text-primary hover:text-primary md:text-lg xl:px-8 xl:py-4 xl:text-2xl">
            <Paintbrush className="hover:text-primary" />
            Perzonaliza la tuya
          </button>
        </div>
      </div>
      <div className="flex h-34 flex-row items-center justify-between bg-background px-4 md:px-8 xl:px-60">
        <div className="flex flex-col items-center justify-between gap-1 md:flex-row">
          <Boxes size={38} className="text-primary" />
          <h1 className="font-heading text-text-primary">Alta calidad</h1>
        </div>
        <div className="flex flex-col items-center justify-between gap-1 md:flex-row">
          <Pencil className="text-primary" size={38} />
          <h1 className="font-heading text-text-primary">Personalizacion</h1>
        </div>
        <div className="flex flex-col items-center justify-between gap-1 md:flex-row">
          <Truck className="text-primary" size={38} />
          <h1 className="font-heading text-text-primary">Envios locales</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
