import { useState } from "react";
import { Box, Menu, ShoppingCart, X } from "lucide-react";
import { Link, NavLink } from "react-router";

const routes = [
  { route: "/", label: "Inicio" },
  { route: "/Catalogo", label: "Catalogo" },
  { route: "/personalizacion", label: "Personalizacion" },
  { route: "/Contacto", label: "Contacto" },
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  `relative w-fit block px-4 py-3 font-medium
               transition-colors duration-300
               ${
                 isActive
                   ? "text-white after:absolute after:inset-x-2 after:bottom-0 after:h-[2px] after:rounded-full after:bg-primary after:shadow-[0_0_16px_4px_rgba(239,68,68,0.55)]"
                   : "text-text-secondary hover:text-white"
               }`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          className="flex cursor-pointer items-center gap-1 text-text-primary duration-300 hover:text-primary"
          to="/"
        >
          <Box size={30} />
          <span className="text-xl font-bold">3Diverso</span>
        </Link>
        <div>
          <ul className="hidden sm:flex md:gap-12 lg:gap-24">
            {routes.map((r) => (
              <NavLink className={navClass} key={r.label} to={r.route}>
                {r.label}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="mr-4">
          <button
            type="button"
            className="hidden cursor-pointer text-text-primary duration-300 hover:text-primary sm:flex"
            aria-label="ver carrito"
          >
            <ShoppingCart size={26} />
          </button>
          <button
            type="button"
            className="cursor-pointer text-text-primary duration-300 focus:text-primary sm:hidden"
            aria-label="ver menu"
            onClick={() => setMenuOpen((s) => !s)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="flex flex-col gap-2 border-t border-white/10 bg-background p-4 sm:hidden">
          {routes.map((i) => (
            <NavLink key={i.route} className={navClass} to={i.route}>
              {i.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
