import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-[#2B2D42] text-[#EDF2F4]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#EF233C] to-[#D90429]">
            Proyectos destacados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Proyecto 1: NutriAgenda */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#EF233C]/30 hover:shadow-[0_2px_8px_rgba(239,35,60,0.2)] transition shadow-md shadow-black/20">
              <h3 className="text-xl font-bold mb-2 text-[#EF233C]">NutriAgenda</h3>
              <p className="text-[#8D99AE] mb-4">
                Aplicación para nutricionistas que permite registrar pacientes, programar citas y llevar un seguimiento de su evolución. Desarrollada para el curso de Diseño y Construcción de Componentes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Spring Boot", "Java", "MySQL", "HTML", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#EF233C]/10 text-[#EF233C] py-1 px-3 rounded-full text-sm hover:bg-[#EF233C]/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="text-[#EF233C] hover:text-[#D90429] transition-colors my-4 inline-block"
              >
                Ver proyecto →
              </a>
            </div>

            {/* Proyecto 2: Multica */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#EF233C]/30 hover:shadow-[0_2px_8px_rgba(239,35,60,0.2)] transition shadow-md shadow-black/20">
              <h3 className="text-xl font-bold mb-2 text-[#EF233C]">Multica</h3>
              <p className="text-[#8D99AE] mb-4">
                Sistema de gestión de multas de tránsito desarrollado en el curso Proyecto de Ingeniería de Software 2. Incluye registro de infracciones, roles de usuario y generación de reportes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C#", ".NET", "SQL Server", "HTML", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#EF233C]/10 text-[#EF233C] py-1 px-3 rounded-full text-sm hover:bg-[#EF233C]/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="text-[#EF233C] hover:text-[#D90429] transition-colors my-4 inline-block"
              >
                Ver proyecto →
              </a>
            </div>
            {/* Proyecto 3: Sistema Académico */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#EF233C]/30 hover:shadow-[0_2px_8px_rgba(239,35,60,0.2)] transition shadow-md shadow-black/20">
              <h3 className="text-xl font-bold mb-2 text-[#EF233C]">Sistema Académico</h3>
              <p className="text-[#8D99AE] mb-4">
                Plataforma de gestión académica para universidades. Permite administrar carreras, cursos, grupos, matrículas y más. Implementado con arquitectura MVC y base de datos relacional.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Spring Boot", "Java", "MySQL", "HTML", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#EF233C]/10 text-[#EF233C] py-1 px-3 rounded-full text-sm hover:bg-[#EF233C]/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="text-[#EF233C] hover:text-[#D90429] transition-colors my-4 inline-block"
              >
                Ver proyecto →
              </a>
            </div>

            {/* Proyecto 4: Cola con Lista Enlazada */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#EF233C]/30 hover:shadow-[0_2px_8px_rgba(239,35,60,0.2)] transition shadow-md shadow-black/20">
              <h3 className="text-xl font-bold mb-2 text-[#EF233C]">Cola con Lista Enlazada</h3>
              <p className="text-[#8D99AE] mb-4">
                Aplicación que implementa una cola usando listas enlazadas simples en Java. Permite insertar, extraer, obtener por posición y visualizar gráficamente los elementos sin usar estructuras predefinidas.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Estructuras de Datos", "Algoritmos", "Consola"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#EF233C]/10 text-[#EF233C] py-1 px-3 rounded-full text-sm hover:bg-[#EF233C]/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="text-[#EF233C] hover:text-[#D90429] transition-colors my-4 inline-block"
              >
                Ver proyecto →
              </a>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
