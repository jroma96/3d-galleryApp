import {
  ShoppingCart,
  Video,
  House,
  Panda,
  Joystick,
  PlantPot,
  Brush,
} from "lucide-react";

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
  return (
    <div className="md:flex md:min-h-128 md:flex-col md:px-8 md:pt-3 md:pb-5 xl:px-62 xl:py-4">
      <div className="px-2 py-2 md:min-h-24">
        <h1 className="font-heading font-bold md:text-4xl">
          Catalogo de figuras
        </h1>
        <span className="font-heading md:text-xl">
          Explora nuestras figuras y encuentra tu proxima figura favorita
        </span>
      </div>
      <div className="flex grow flex-col gap-y-2 px-2 py-2 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-x-4 md:gap-y-4 md:p-0 xl:grid-rows-3">
        <div className="rounded-md bg-surface duration-300 hover:bg-surface-hover md:row-span-2 md:flex md:flex-col md:justify-between md:gap-y-2 md:px-4 md:py-5 xl:row-span-3 xl:justify-around">
          <h2 className="font-bold xl:text-3xl">Categorias</h2>
          {categories.map((c) => (
            <div className="duration-300 hover:bg-primary-hover md:flex md:min-h-12 md:items-center md:gap-x-2 md:rounded-md md:px-5">
              {c.icon}
              <span className="xl:text-xl">{c.name}</span>
            </div>
          ))}
        </div>
        {catalogImages.map((image, index) => (
          <div
            className={`rounded-md bg-surface duration-300 hover:bg-surface-hover ${index > 5 ? "hidden xl:block" : ""}`}
          >
            <img
              className="rounded-t-md object-cover object-top md:h-34 md:w-72"
              src={image.src}
              alt={image.alt}
            />
            <div className="flex items-center justify-between md:px-4 md:py-1">
              <div className="flex flex-col">
                <h2 className="font-bold">{image.name}</h2>
                <span>{image.price}</span>
              </div>
              <ShoppingCart className="rounded-md bg-primary duration-300 hover:bg-text-primary hover:text-primary-hover md:min-h-8 md:min-w-8 md:px-1.5 md:py-1.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
