import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#2B2D42] text-[#EDF2F4] flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      {/* Botón de cierre */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[#EF233C] text-4xl font-bold focus:outline-none cursor-pointer"
        aria-label="Cerrar menú"
      >
        &times;
      </button>

      {/* Enlaces */}
      {[
        { href: "#home", label: "Inicio" },
        { href: "#about", label: "Sobre mí" },
        { href: "#projects", label: "Proyectos" },
        { href: "#contact", label: "Contacto" },
      ].map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold my-4 transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } hover:text-[#EF233C]`}
        >
          {label}
        </a>
      ))}
    </div>
  );
};
