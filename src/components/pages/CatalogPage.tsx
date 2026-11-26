import { ShoppingCart, OctagonX } from "lucide-react";
import { useEffect, useState, type ChangeEvent } from "react";
import { Link } from "react-router";

const catalogImages = [
  {
    src: "/images/fox-3D.png",
    alt: "Figura de un zorro 3D",
    name: "Fox",
    fecha: new Date(),
    price: 80.5,
    category: "Videojuegos",
  },
  {
    src: "/images/dragon-3D.png",
    alt: "Figura de un dragon 3D",
    name: "Dragon",
    fecha: new Date(),
    price: 75.0,
    category: "Anime",
  },
  {
    src: "/images/knight-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Knight",
    fecha: new Date("2026/11/01"),
    price: 80.0,
    category: "Peliculas",
  },
  {
    src: "/images/cat-3D.png",
    alt: "Figura de un gato 3D",
    name: "Cat",
    fecha: new Date("2026/11/02"),
    price: 90.0,
    category: "Originales",
  },
  {
    src: "/images/maceta-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Maceta",
    fecha: new Date("2026/11/10"),
    price: 95.0,
    category: "Decoracion",
  },
  {
    src: "/images/jarron-3D.png",
    alt: "Figura de un gato 3D",
    name: "Jarron",
    fecha: new Date("2026/11/11"),
    price: 85.0,
    category: "Decoracion",
  },
  {
    src: "/images/cat-3D.png",
    alt: "Figura de un gato 3D",
    name: "Cat",
    fecha: new Date("2026/11/04"),
    price: 85.0,
    category: "Originales",
  },
  {
    src: "/images/maceta-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Maceta",
    fecha: new Date("2026/11/07"),
    price: 95.0,
    category: "Decoracion",
  },
  {
    src: "/images/jarron-3D.png",
    alt: "Figura de un gato 3D",
    name: "Jarron",
    fecha: new Date("2026/11/13"),
    price: 100.0,
    category: "Decoracion",
  },
];

const categories = [
  "Todas",
  "Anime",
  "Videojuegos",
  "Peliculas",
  "Decoracion",
  "Originales",
];

function CatalogPage() {
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");
  const [gallery, setGallery] = useState(catalogImages);

  function handleSort(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "Recientes") {
      setGallery((g) =>
        g.toSorted((a, b) => Number(b.fecha) - Number(a.fecha)),
      );
    }
    if (e.target.value === "Precio ascendente") {
      setGallery((g) => g.toSorted((a, b) => a.price - b.price));
    }
    if (e.target.value === "Precio descendente") {
      setGallery((g) => g.toSorted((a, b) => b.price - a.price));
    }
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setGallery(catalogImages);
    } else {
      setGallery((g) =>
        g.filter((i) => i.name.toLowerCase().includes(e.target.value)),
      );
    }
  }

  function handleFilter(c: string) {
    setFilter((name) => (name === c ? "" : c));
    if (c === "Todas") {
      setGallery(catalogImages);
    } else {
      setGallery((g) => g.filter((i) => i.category === c));
    }
  }

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
      <div className="grid-auto-rows-min grid grid-cols-2 gap-x-3 gap-y-3 px-2 py-3 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-x-4 md:gap-y-3 md:p-0 xl:grid-rows-3 xl:gap-y-3 xl:py-2">
        <div className="col-span-2 flex flex-col gap-2 md:hidden">
          <input
            value={query}
            onChange={handleSearch}
            placeholder="Buscar figuras..."
            className="rounded-full bg-white/10 px-5 py-2 md:hidden"
          />
          <div className="flex flex-wrap items-center justify-around gap-3">
            {categories.map((c) => (
              <div
                onClick={() => handleFilter(c)}
                className={`${filter === c ? "bg-primary-hover" : "bg-surface-hover"} flex min-h-6 min-w-22 items-center justify-around rounded-full duration-300 hover:bg-primary-hover`}
              >
                <span className="text-xs xl:text-lg">{c}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden min-h-48 rounded-md bg-surface pt-2 duration-300 sm:flex sm:flex-col md:row-span-1 md:flex md:flex-col md:justify-between md:gap-y-1 md:px-2 md:py-2 xl:row-span-2 xl:justify-start xl:gap-y-3 xl:py-4">
          <div className="flex items-center justify-between border-b border-white/10 bg-transparent px-2 md:h-12 md:px-1 md:pb-2 xl:h-14 xl:pb-4">
            <input
              value={query}
              onChange={handleSearch}
              className="grow rounded-md bg-white/10 px-2 sm:py-2 md:h-8 search-cancel:invert-50"
              placeholder="Search"
              type="search"
            />
          </div>
          <div className="grid-cols-3 grid-rows-3 px-2 py-2 md:grid md:min-h-30 md:grow md:gap-x-4 md:py-0 xl:grid-cols-4 xl:grid-rows-5">
            <h2 className="col-span-3 text-base font-bold md:text-base xl:text-3xl">
              Categorias
            </h2>
            {categories.map((c) => (
              <div
                onClick={() => handleFilter(c)}
                className={`${filter === c ? "bg-primary-hover" : "bg-surface-hover"} col-span-1 flex max-h-8 min-h-8 items-center justify-around duration-300 hover:bg-primary-hover md:col-span-1 md:max-h-3 md:max-w-32 md:gap-x-1 md:gap-y-2 md:rounded-full md:px-1 xl:col-span-2 xl:min-h-8 xl:px-2`}
              >
                <span className="text-xs xl:text-lg">{c}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden gap-y-2 rounded-md bg-surface px-4 py-2 md:row-span-1 md:row-start-2 md:mb-20 md:flex md:flex-col md:gap-y-4 xl:row-start-3">
          <h2 className="font-bold md:text-xl xl:text-2xl">Ordenar Por</h2>
          <select
            onChange={handleSort}
            className="h-10 rounded-md bg-surface-hover px-3"
          >
            <option>Recientes</option>
            <option>Precio ascendente</option>
            <option>Precio descendente</option>
          </select>
        </div>
        {gallery.length < 1 ? (
          <div className="col-span-2 flex grow items-center justify-start px-7 text-xl md:col-span-3 md:row-span-2 md:pb-24 md:pl-30 md:text-3xl xl:row-span-3 xl:gap-x-4 xl:px-8 xl:text-5xl">
            No se encontraron resultados{" "}
            <OctagonX className="pt-3 text-primary-hover" size={60} />
          </div>
        ) : (
          gallery.map((image, index) => (
            <Link to={`/Catalogo/${image.name}`}>
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
                    <span>Q {image.price}</span>
                  </div>
                  <ShoppingCart className="min-h-8 min-w-8 rounded-md bg-primary px-1.5 py-1.5 duration-300 hover:bg-text-primary hover:text-primary-hover" />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
