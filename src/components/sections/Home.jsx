import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#2B2D42] text-[#EDF2F4]"
    >
      <RevealOnScroll>
        <div className="text-center px-4 z-10">
          {/* Avatar redondo */}
         <img
          src="/yo.png"
          alt="Avatar de Jimena"
          className="w-32 h-32 object-cover object-top rounded-full mx-auto mb-6 shadow-lg"
        />



          {/* Nombre principal */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#EF233C] to-[#D90429] drop-shadow-sm">
            Jimena Araya
          </h1>

          {/* Slogan */}
          <p className="text-[#8D99AE] text-lg md:text-xl italic mb-4">
            Transformando ideas en experiencias digitales
          </p>

          {/* Descripción */}
          <p className="text-[#EDF2F4] text-md md:text-lg mb-8 max-w-2xl mx-auto">
            Ingeniera en Software especializada en desarrollo de soluciones web con conocimientos
            en desarrollo Front-End y Back-End, manejo de bases de datos SQL y experiencia en proyectos 
            académicos orientados a resolver problemas reales. Apasionada por la innovación, la eficiencia 
            y el diseño centrado en el usuario.
          </p>

          {/* Botones */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-[#EF233C] text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_#D90429]"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="border border-[#EF233C] text-[#EF233C] py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-[#D90429]/10 hover:shadow-[0_0_10px_#D90429]"
            >
              Contáctame
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
