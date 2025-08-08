import { useEffect } from "react";
import logo from "../../public/logo.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="top-0 fixed w-full z-40 bg-[#000] backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img src={logo} alt="Jimena Araya Logo" className="h-10 w-auto" />
          </a>

          {/* Botón menú móvil */}
          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#home", label: "Inicio" },
              { href: "#about", label: "Sobre mí" },
              { href: "#projects", label: "Proyectos" },
              { href: "#contact", label: "Contacto" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-[#EDF2F4] hover:text-[#8c52ff] font-medium transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
