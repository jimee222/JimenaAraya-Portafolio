import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "Bootstrap"];
  const backendSkills = ["Java", "C#", "Python", "SQL", "Spring Boot"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-[#2B2D42] text-[#EDF2F4]"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#EF233C] to-[#D90429]">
            Sobre mí
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all shadow-md shadow-black/20">
            <p className="text-[#EDF2F4] mb-6">
              Soy estudiante de Ingeniería del Software en la Universidad CENFOTEC. A lo largo de mi carrera he trabajado con diversas tecnologías, desarrollando soluciones tanto del lado del cliente como del servidor. Me destaco por ser responsable, curiosa, empática y comprometida con mi crecimiento personal y profesional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#EF233C]">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#EF233C]/10 text-[#EF233C] py-1 px-3 rounded-full text-sm hover:bg-[#EF233C]/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#EF233C]">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#EF233C]/10 text-[#EF233C] py-1 px-3 rounded-full text-sm hover:bg-[#EF233C]/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Educación y Experiencia */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[#D90429]">🎓 Educación</h3>
              <ul className="list-disc list-inside text-[#8D99AE] space-y-2">
                <li>
                  <strong className="text-[#EDF2F4]">Ingeniería del Software</strong> – Universidad CENFOTEC
                </li>
                <li>
                  Cursos clave: Estructuras de datos, Desarrollo web, Programación orientada a objetos, Proyecto de Ingeniería de Software
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[#D90429]">🎓 Experiencia universitaria</h3>
              <p className="text-[#8D99AE]">
                A lo largo de mi carrera universitaria he participado en proyectos prácticos que simulan entornos reales de desarrollo: sistema de multas, plataforma nutricional (NutriAgenda), entre otros. 
                Estas experiencias me han permitido aplicar conocimientos técnicos, trabajar en equipo y resolver problemas de forma profesional.
              </p>
            </div>
          </div>

          {/* Misión, visión y valores */}
          <div className="mt-8 rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-6 text-[#D90429]">🎯 Misión, Visión y Valores</h3>
            <div className="text-[#8D99AE] space-y-4">
              <p>
                <strong className="text-[#EDF2F4]">Misión:</strong> Desarrollar soluciones digitales eficientes y funcionales que respondan a las necesidades reales de usuarios y empresas.
              </p>
              <p>
                <strong className="text-[#EDF2F4]">Visión:</strong> Convertirme en una profesional reconocida por el diseño de productos tecnológicos innovadores, accesibles y con impacto positivo.
              </p>
              <div>
                <strong className="text-[#EDF2F4]">Valores personales:</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>Responsabilidad</li>
                  <li>Curiosidad</li>
                  <li>Empatía</li>
                  <li>Superación</li>
                  <li>Honestidad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
