import { Link } from "react-router";
import { Box, MessageCircle, Mail, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

const navigationLinks = [
  { label: "Inicio", to: "/" },
  { label: "Catálogo", to: "/catalogo" },
  { label: "Personalización", to: "/personalizacion" },
  { label: "Contacto", to: "/contacto" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/3d.diverso",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-8">
        {/* Brand */}
        <div className="space-y-5">
          <Link to="/" className="inline-flex items-center gap-2">
            <Box size={30} className="text-primary" />

            <span className="font-heading text-2xl font-bold">
              <span className="text-primary">3D</span>iverso
            </span>
          </Link>

          <p className="max-w-xs text-sm leading-6 text-text-secondary">
            Transformamos ideas en figuras únicas mediante impresión 3D. Diseños
            personalizados y piezas coleccionables hechas con pasión.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <Icon size={21} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-5 font-heading text-lg font-semibold">Explorar</h3>

          <nav aria-label="Navegación del pie de página">
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 font-heading text-lg font-semibold">
            Contáctanos
          </h3>

          <ul className="space-y-4 text-sm text-text-secondary">
            <li className="flex items-center gap-3">
              <MessageCircle size={20} className="shrink-0 text-primary" />
              <span>WhatsApp</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={20} className="shrink-0 text-primary" />
              <span>Correo electrónico</span>
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={20} className="shrink-0 text-primary" />
              <span>Guatemala</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-text-secondary md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} LayerLab 3D. Todos los derechos
            reservados.
          </p>

          <p>Hecho con pasión por la impresión 3D.</p>
        </div>
      </div>
    </footer>
  );
}
