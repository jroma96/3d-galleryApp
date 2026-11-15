import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Box, Menu, ShoppingCart, X } from "lucide-react";

const links = [
  { label: "Inicio", to: "/" },
  { label: "Catálogo", to: "/catalogo" },
  { label: "Personalización", to: "/personalizacion" },
  { label: "Contacto", to: "/contacto" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "bg-primary text-background"
        : "text-text-secondary hover:text-primary"
    }`;
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Box className="text-primary" size={30} />
          <span className="text-xl font-bold">3Diverso</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Ver carrito"
            className="cursor-pointer text-text-primary hover:text-primary sm:flex"
            disabled
            title="Disponible próximamente"
          >
            <ShoppingCart size={23} />
          </button>

          <button
            type="button"
            className="cursor-pointer sm:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="flex flex-col gap-2 border-t border-white/10 bg-background p-4 md:hidden"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
