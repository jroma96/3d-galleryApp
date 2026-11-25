import { ShoppingBag } from "lucide-react";
import { useParams } from "react-router";
import { Hammer, Palette, Truck } from "lucide-react";

const catalogImages = [
  {
    src: "/images/fox-3D.png",
    alt: "Figura de un zorro 3D",
    details:
      "Figura impresa en filamento de alta calidad y pintada a mano con pintura acrilica con alto detalle",
    name: "Fox",
    price: "Q 95.00",
  },
  {
    src: "/images/dragon-3D.png",
    alt: "Figura de un dragon 3D",
    details:
      "Figura impresa en filamento de alta calidad y pintada a mano con pintura acrilica con alto detalle",
    name: "Dragon",
    price: "Q 95.00",
  },
  {
    src: "/images/knight-3D.png",
    alt: "FIgura de un caballero 3D",
    details:
      "Figura impresa en filamento de alta calidad y pintada a mano con pintura acrilica con alto detalle",
    name: "Knight",
    price: "Q 95.00",
  },
  {
    src: "/images/cat-3D.png",
    alt: "Figura de un gato 3D",
    details:
      "Figura impresa en filamento de alta calidad y pintada a mano con pintura acrilica con alto detalle",
    name: "Cat",
    price: "Q 95.00",
  },
  {
    src: "/images/maceta-3D.png",
    alt: "FIgura de un caballero 3D",
    details:
      "Figura impresa en filamento de alta calidad y pintada a mano con pintura acrilica con alto detalle",
    name: "Maceta",
    price: "Q 95.00",
  },
  {
    src: "/images/jarron-3D.png",
    alt: "Figura de un gato 3D",
    details:
      "Figura impresa en filamento de alta calidad y pintada a mano con pintura acrilica con alto detalle",
    name: "Jarron",
    price: "Q 95.00",
  },
  {
    src: "/images/cat-3D.png",
    alt: "Figura de un gato 3D",
    details:
      "Figura impresa en filamento de alta calidad y pintada a mano con pintura acrilica con alto detalle",
    name: "Cat",
    price: "Q 95.00",
  },
  {
    src: "/images/maceta-3D.png",
    alt: "FIgura de un caballero 3D",
    details:
      "Figura impresa en filamento de alta calidad y pintada a mano con pintura acrilica con alto detalle",
    name: "Maceta",
    price: "Q 95.00",
  },
  {
    src: "/images/jarron-3D.png",
    alt: "Figura de un gato 3D",
    details:
      "Figura impresa en filamento de alta calidad y pintada a mano con pintura acrilica con alto detalle",
    name: "Jarron",
    price: "Q 95.00",
  },
];

function ProductDetailPage() {
  const params = useParams();
  return (
    <div className="justify-around md:grid md:max-h-130 md:grid-cols-2 md:gap-x-4">
      <div className="flex justify-end">
        <img
          className="object-fill"
          src={catalogImages.find((i) => i.name === params.slug)?.src}
        />
      </div>
      <div className="md:flex md:flex-col md:gap-2 md:px-10 md:py-6">
        <h1 className="font-bold md:text-6xl">{params.slug}</h1>
        <span className="font-semibold text-primary md:text-3xl">
          {catalogImages.find((i) => i.name === params.slug)?.alt}
        </span>
        <p className="md:text-lg">
          {catalogImages.find((i) => i.name === params.slug)?.details}
        </p>
        <div className="md:flex md:flex-col md:gap-6 md:py-8">
          <div className="flex gap-2">
            <Hammer />
            <span>Alta resistencia</span>
          </div>
          <div className="flex gap-2">
            <Palette />
            <span>Colores brillantes</span>
          </div>
          <div className="flex gap-2">
            <Truck />
            <span>Envio a domicilio</span>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <button className="items-center justify-around gap-x-1 rounded-md border border-primary bg-primary px-4 py-2 text-sm duration-300 hover:border hover:border-text-primary hover:bg-transparent md:flex md:min-h-14 md:max-w-58 md:text-lg xl:px-8 xl:py-4 xl:text-2xl">
            <ShoppingBag />
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
