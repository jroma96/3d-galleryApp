import { Handshake, Palette, PencilSparkles, ShoppingBag } from "lucide-react";

function CustomizationPage() {
  return (
    <div className="justify-around md:grid md:max-h-130 md:min-h-116 md:grid-cols-2 md:gap-x-4">
      <div className="flex justify-end">
        <img className="object-fill" src="./images/print-dragon-red.png" />
      </div>
      <div className="flex min-h-88 flex-col px-5 py-3 md:gap-2 md:px-10 md:py-6">
        <h1 className="text-xl font-bold md:text-5xl">
          ¿Quieres una figura <br />
          <span className="text-primary">perzonalizada?</span>{" "}
        </h1>
        <p className="text-base md:text-lg">
          Cuentanos tu idea y la imprimimos en 3D.
          <br /> Puedes elegir el personaje, tamaño, color y mas.
        </p>
        <div className="flex flex-col gap-2 py-6 md:gap-6 md:py-8">
          <div className="flex gap-2">
            <ShoppingBag />
            <span>Personajes, logos o diseños propios</span>
          </div>
          <div className="flex gap-2">
            <Palette />
            <span>Diferentes tamaños y colores</span>
          </div>
          <div className="flex gap-2">
            <Handshake />
            <span>Asesoramiento para tu diseño</span>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <button className="flex items-center justify-around gap-x-1 rounded-md border border-primary bg-primary px-4 py-2 text-sm duration-300 hover:border hover:border-text-primary hover:bg-transparent md:flex md:min-h-14 md:max-w-84 md:text-lg xl:px-8 xl:py-4 xl:text-2xl">
            <PencilSparkles />
            Solicitar figura personalizada
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomizationPage;
