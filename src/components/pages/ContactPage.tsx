import { Clock, MapPin, MessageCircleMore, Mail } from "lucide-react";

function ContactPage() {
  return (
    <div className="justify-around md:grid md:max-h-130 md:min-h-116 md:grid-cols-2 md:gap-x-4">
      <div className="flex justify-end">
        <img className="object-fill" src="./images/dragon-orange.png" />
      </div>
      <div className="flex min-h-88 flex-col px-5 py-3 md:gap-2 md:px-10 md:py-6">
        <h1 className="text-xl font-bold md:text-5xl">Contactanos</h1>
        <p className="text-base md:text-lg">
          ¿Tienes dudas, quieres hacer un pedido o una figura personalizada?
          <br /> ¡Escribenos y con gusto te ayudamos!
        </p>
        <div className="flex flex-col gap-2 py-6 md:gap-6 md:py-8">
          <div className="flex gap-2">
            <Mail />
            <span>3diverso.correo@gmail.com</span>
          </div>
          <div className="flex gap-2">
            <MapPin />
            <span>Ciudad de Guatemala</span>
          </div>
          <div className="flex gap-2">
            <Clock />
            <span>Lun - Sab: 9:00 a.m. - 6:00 p.m.</span>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <button className="flex items-center justify-around gap-x-2 rounded-md border border-green-400 bg-green-400 px-4 py-2 text-sm duration-300 hover:border hover:border-text-primary hover:bg-transparent md:flex md:min-h-14 md:max-w-84 md:text-lg xl:px-8 xl:py-4 xl:text-2xl">
            <MessageCircleMore />
            Chatear por whatsapp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
