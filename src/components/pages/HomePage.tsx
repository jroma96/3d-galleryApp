import { ShoppingBag, Paintbrush } from "lucide-react";

function HomePage() {
  return (
    <div className="relative isolate grid gap-y-6 overflow-hidden md:min-h-105 md:grid-flow-col md:grid-cols-2 md:grid-rows-3">
      <h1 className="relative z-10 col-start-1 font-heading text-4xl font-bold md:text-6xl">
        Figuras unicas
        <h1 className="relative z-10 font-heading text-4xl font-bold text-primary md:text-6xl">
          impresas en 3D
        </h1>
      </h1>

      <p className="relative z-10 col-start-1 text-xl">
        Coleccionables, decoracion y<br />
        figuras personalizadas,
        <br /> impresas con alta calidad y detalle.
      </p>
      <div className="relative aspect-video overflow-hidden md:absolute md:inset-y-0 md:right-0 md:z-0 md:aspect-auto md:w-[68%]">
        <img
          src="/images/goku-red.png"
          alt="Figura coleccionable de Goku"
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom,black_75%,transparent)] object-cover object-right md:mask-[linear-gradient(to_right,transparent,black_45%)]"
        />
      </div>
      <div className="col-start-1 flex items-center gap-3">
        <button className="flex gap-x-1 rounded-md border border-primary bg-primary px-4 py-2 duration-300 hover:border hover:border-text-primary hover:bg-transparent">
          <ShoppingBag />
          Ver catalogo
        </button>
        <button className="flex gap-x-1 rounded-md border border-text-primary bg-transparent px-4 py-2 duration-300 hover:bg-text-primary hover:text-primary">
          <Paintbrush className="hover:text-primary" />
          Perzonaliza la tuya
        </button>
      </div>
    </div>
  );
}

export default HomePage;
