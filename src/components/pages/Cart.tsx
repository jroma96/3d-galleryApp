import { Trash } from "lucide-react";

const fakeCart = [
  {
    src: "/images/fox-3D.png",
    alt: "Figura de un zorro 3D",
    name: "Fox",
    fecha: new Date(),
    price: 80.5,
    quantity: 1,
    category: "Videojuegos",
  },
  {
    src: "/images/dragon-3D.png",
    alt: "Figura de un dragon 3D",
    name: "Dragon",
    fecha: new Date(),
    price: 75.0,
    quantity: 2,
    category: "Anime",
  },
  {
    src: "/images/knight-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Knight",
    fecha: new Date("2026/11/01"),
    price: 80.0,
    quantity: 1,
    category: "Peliculas",
  },
  {
    src: "/images/cat-3D.png",
    alt: "Figura de un gato 3D",
    name: "Cat",
    fecha: new Date("2026/11/02"),
    price: 90.0,
    quantity: 3,
    category: "Originales",
  },
  {
    src: "/images/maceta-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Maceta",
    fecha: new Date("2026/11/10"),
    price: 95.0,
    quantity: 1,
    category: "Decoracion",
  },
  {
    src: "/images/jarron-3D.png",
    alt: "Figura de un gato 3D",
    name: "Jarron",
    fecha: new Date("2026/11/11"),
    price: 85.0,
    quantity: 2,
    category: "Decoracion",
  },
  {
    src: "/images/cat-3D.png",
    alt: "Figura de un gato 3D",
    name: "Cat",
    fecha: new Date("2026/11/04"),
    price: 85.0,
    quantity: 3,
    category: "Originales",
  },
  {
    src: "/images/maceta-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Maceta",
    fecha: new Date("2026/11/07"),
    price: 95.0,
    quantity: 1,
    category: "Decoracion",
  },
  {
    src: "/images/jarron-3D.png",
    alt: "Figura de un gato 3D",
    name: "Jarron",
    fecha: new Date("2026/11/13"),
    price: 100.0,
    quantity: 1,
    category: "Decoracion",
  },
];

export default function Cart() {
  const items = 3;
  return (
    <div className="md:flex md:min-h-128 md:flex-col md:px-8 md:pt-2 md:pb-5 xl:px-62 xl:py-3">
      <div className="flex flex-col justify-start px-2 py-2 md:min-h-24">
        <h1 className="font-heading text-lg font-bold md:text-4xl">
          Mi Carrito
        </h1>
        <span className="font-heading text-xs text-white/50 md:text-xl">
          {items} figuras en tu carrito
        </span>
      </div>
      <div className="grid-auto-rows-min grid grid-cols-2 gap-x-3 gap-y-3 px-2 py-3 md:grid md:grid-cols-4 md:grid-rows-3 md:gap-x-4 md:gap-y-3 md:p-0 xl:gap-y-3 xl:py-2">
        <div className="col-span-2 flex flex-col gap-2 md:hidden"></div>
        <div className="hidden max-h-70 rounded-md bg-surface pt-2 duration-300 md:row-span-3 md:flex md:flex-col md:justify-between md:gap-y-1 md:px-4 md:py-2 md:pb-4 xl:justify-start xl:gap-y-3 xl:py-4">
          <h2 className="text-base font-bold md:text-lg xl:text-3xl">
            Resumen del pedido
          </h2>
          <div className="border-b-2 border-white/10 pb-2 md:flex md:flex-col">
            <div className="md:flex md:items-center md:justify-between">
              <span>Subtotal</span>
              <span>Q 100.00</span>
            </div>
            <div className="md:flex md:items-center md:justify-between">
              <span>Envio</span>
              <span>Q 50.00</span>
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-between">
            <span className="font-bold">Total</span>
            <span className="font-bold">Q 150.00</span>
          </div>
          <button className="flex items-center justify-around gap-x-1 rounded-md border border-primary bg-primary px-4 py-2 text-sm duration-300 hover:border hover:border-text-primary hover:bg-transparent md:flex md:min-h-10 md:text-lg xl:px-8 xl:py-4 xl:text-2xl">
            Continuar compra
          </button>
          <button className="flex items-center gap-x-1 rounded-md border border-text-primary bg-transparent px-4 py-2 text-sm duration-300 hover:bg-text-primary hover:text-primary md:justify-around md:text-lg xl:px-8 xl:py-4 xl:text-2xl">
            Regresar
          </button>
        </div>
        {fakeCart.map((i, index) => (
          <div
            className={`${index > 2 ? "md:hidden" : ""} hidden min-h-31 items-center rounded-md bg-surface duration-300 md:col-span-3 md:col-start-2 md:flex md:justify-between md:gap-y-1 md:px-4 xl:justify-start xl:gap-y-3 xl:py-4`}
          >
            <div className="flex items-center justify-start gap-4">
              <img className="max-h-24 rounded-md" src={i.src} />
              <div className="flex flex-col">
                <span className="font-bold">{i.name}</span>
                <span className="">{i.alt}</span>
                <span className="font-bold text-primary">Q {i.price}</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-24 px-6">
              <div className="flex w-24 cursor-pointer items-center justify-around rounded-md border-2 border-white/10 bg-surface px-2 py-2 duration-300 hover:bg-surface-hover">
                <button className="cursor-pointer">-</button>
                <span>{i.quantity}</span>
                <button className="cursor-pointer">+</button>
              </div>
              <Trash className="cursor-pointer duration-300 hover:text-primary-hover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
