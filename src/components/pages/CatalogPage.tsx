import {
  ShoppingCart,
  Video,
  House,
  Panda,
  Joystick,
  PlantPot,
  Brush,
} from "lucide-react";
import { useState } from "react";

const catalogImages = [
  {
    src: "/images/fox-3D.png",
    alt: "Figura de un zorro 3D",
    name: "Fox",
    price: "Q 95.00",
  },
  {
    src: "/images/dragon-3D.png",
    alt: "Figura de un dragon 3D",
    name: "Dragon",
    price: "Q 95.00",
  },
  {
    src: "/images/knight-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Knight",
    price: "Q 95.00",
  },
  {
    src: "/images/cat-3D.png",
    alt: "Figura de un gato 3D",
    name: "Cat",
    price: "Q 95.00",
  },
  {
    src: "/images/maceta-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Maceta",
    price: "Q 95.00",
  },
  {
    src: "/images/jarron-3D.png",
    alt: "Figura de un gato 3D",
    name: "Jarron",
    price: "Q 95.00",
  },
  {
    src: "/images/cat-3D.png",
    alt: "Figura de un gato 3D",
    name: "Cat",
    price: "Q 95.00",
  },
  {
    src: "/images/maceta-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Maceta",
    price: "Q 95.00",
  },
  {
    src: "/images/jarron-3D.png",
    alt: "Figura de un gato 3D",
    name: "Jarron",
    price: "Q 95.00",
  },
];

const categories = [
  { name: "Todas", icon: <House /> },
  { name: "Anime", icon: <Panda /> },
  { name: "Videojuegos", icon: <Joystick /> },
  { name: "Peliculas", icon: <Video /> },
  { name: "Decoracion", icon: <PlantPot /> },
  { name: "Originales", icon: <Brush /> },
];

function CatalogPage() {
  const [filter, setFilter] = useState("");
  console.log(filter);
  return (
    <div className="md:flex md:min-h-128 md:flex-col md:px-8 md:pt-2 md:pb-5 xl:px-62 xl:py-3">
      <div className="flex flex-col justify-start px-2 py-2 md:min-h-24">
        <h1 className="font-heading text-lg font-bold md:text-4xl">
          Catalogo de figuras
        </h1>
        <span className="font-heading text-xs md:text-xl">
          Explora nuestras figuras y encuentra tu proxima figura favorita
        </span>
      </div>
      <div className="grid-auto-rows-min grid grid-cols-2 gap-x-3 gap-y-3 px-2 py-2 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-x-4 md:gap-y-3 md:p-0 xl:grid-rows-3 xl:gap-y-4 xl:py-2">
        <div className="col-span-2 flex flex-col gap-2 md:hidden">
          <input
            placeholder="Buscar figuras..."
            className="rounded-full bg-white/10 px-5 py-2 md:hidden"
          />
          <div className="flex flex-wrap items-center justify-around gap-3">
            {categories.map((c) => (
              <div
                onClick={() =>
                  setFilter((name) => (name === c.name ? "" : c.name))
                }
                className={`${filter === c.name ? "bg-primary-hover" : "bg-surface-hover"} flex min-h-6 min-w-22 items-center justify-around rounded-full duration-300 hover:bg-primary-hover`}
              >
                <span className="text-xs xl:text-lg">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden min-h-48 rounded-md bg-surface pt-2 duration-300 sm:flex sm:flex-col md:row-span-1 md:flex md:flex-col md:justify-between md:gap-y-1 md:px-2 md:py-2 xl:row-span-2 xl:justify-start xl:gap-y-3 xl:py-4">
          <div className="flex items-center justify-between border-b border-white/10 bg-transparent px-2 md:h-12 md:px-1 md:pb-2 xl:h-14 xl:pb-4">
            <input
              className="grow rounded-md bg-white/10 px-2 sm:py-2 md:h-8 search-cancel:invert-50"
              placeholder="Search"
              type="search"
            />
          </div>
          <div className="grid-cols-3 grid-rows-3 px-2 py-2 md:grid md:min-h-30 md:grow md:gap-x-4 md:py-0">
            <h2 className="col-span-3 text-base font-bold md:text-base xl:text-3xl">
              Categorias
            </h2>
            {categories.map((c) => (
              <div
                onClick={() =>
                  setFilter((name) => (name === c.name ? "" : c.name))
                }
                className={`${filter === c.name ? "bg-primary-hover" : "bg-surface-hover"} col-span-1 flex max-h-8 min-h-8 items-center justify-around duration-300 hover:bg-primary-hover md:col-span-1 md:max-h-3 md:max-w-32 md:gap-x-1 md:gap-y-2 md:rounded-full md:px-1 xl:min-h-8 xl:px-5`}
              >
                <span className="text-xs xl:text-lg">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden gap-y-2 rounded-md bg-surface px-4 py-2 md:row-span-1 md:row-start-2 md:mb-20 md:flex md:flex-col md:gap-y-4 xl:row-start-3">
          <h2 className="font-bold md:text-xl xl:text-2xl">Ordenar Por</h2>
          <select className="h-10 rounded-md bg-surface-hover px-3">
            <option>Recientes</option>
            <option>Precio ascendente</option>
            <option>Precio descendente</option>
          </select>
        </div>
        {catalogImages.map((image, index) => (
          <div
            className={`flex flex-col rounded-md bg-surface duration-300 hover:bg-surface-hover ${index > 5 ? "hidden xl:block" : ""}`}
          >
            <img
              className="h-32 rounded-t-md object-cover object-top md:h-34 md:w-72 md:object-cover"
              src={image.src}
              alt={image.alt}
            />
            <div className="flex items-center justify-between px-4 py-1">
              <div className="flex flex-col">
                <h2 className="font-bold">{image.name}</h2>
                <span>{image.price}</span>
              </div>
              <ShoppingCart className="min-h-8 min-w-8 rounded-md bg-primary px-1.5 py-1.5 duration-300 hover:bg-text-primary hover:text-primary-hover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
