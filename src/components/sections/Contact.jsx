import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Mensaje enviado con éxito.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Algo salió mal. Intenta de nuevo más tarde.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-[#2B2D42] text-[#EDF2F4]"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#EF233C] to-[#D90429] bg-clip-text text-transparent text-center">
            Contáctame
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-[#8D99AE] transition focus:outline-none focus:border-[#EF233C] focus:bg-[#EF233C]/5"
                placeholder="Nombre completo..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-[#8D99AE] transition focus:outline-none focus:border-[#EF233C] focus:bg-[#EF233C]/5"
                placeholder="correo@ejemplo.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-[#8D99AE] transition focus:outline-none focus:border-[#EF233C] focus:bg-[#EF233C]/5"
                placeholder="Tu mensaje..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#EF233C] text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,35,60,0.4)]"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Enlace a LinkedIn */}
          <div className="mt-8 text-center">
            <p className="text-[#8D99AE]">También puedes visitarme en:</p>
            <a
              href="https://www.linkedin.com/in/jimena-araya-4b2093372/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EF233C] hover:text-[#D90429] font-medium transition"
            >
              LinkedIn → /jimena-araya
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
