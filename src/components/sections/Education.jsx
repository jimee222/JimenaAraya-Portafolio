import { RevealOnScroll } from "../RevealOnScroll";
import { Grid, Stack, Typography } from "@mui/material";
import education from "../../../public/education.png";
import proyecto from "../../../public/proyecto.png";
import desarrolloweb from "../../../public/desarrolloweb.png";
import estructurasdatos from "../../../public/estructurasdatos.png";
import poo from "../../../public/poo.png";

export const Education = () => {
  const images = [
    { src: desarrolloweb, alt: "Desarrollo Web" },
    { src: proyecto, alt: "Proyecto" },
    { src: poo, alt: "Programación Orientada a Objetos" },
    { src: estructurasdatos, alt: "Estructuras de Datos" },
  ];

  return (
    <RevealOnScroll>
      <Grid
        container
        spacing={3}
        sx={{ bgcolor: "#000", p: 2 }}
        justifyContent="center"
      >
        <Grid
          size={{ xs: 12, md: 10 }}
          sx={{ marginTop: "20px" }}
          align="center"
        >
          <Stack spacing={3}>
            <img src={education} width="250px" alt="Education" />
            <Stack textAlign="left">
              <Typography fontWeight="bold" variant="h6">
                Ingeniería del Software
              </Typography>
              <Typography variant="body2">- Universidad CENFOTEC</Typography>
            </Stack>
            <Stack textAlign="left">
              <Typography fontWeight="bold" variant="h6">
                Experiencia universitaria
              </Typography>
              <Typography variant="body2">
                A lo largo de mi carrera universitaria he participado en
                proyectos prácticos que simulan entornos reales de desarrollo:
                sistema de multas, plataforma nutricional (NutriAgenda), entre
                otros. Estas experiencias me han permitido aplicar conocimientos
                técnicos, trabajar en equipo y resolver problemas de forma
                profesional.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
          <Grid container spacing={3}>
            {images.map(({ src, alt }, id) => (
              <Grid
                key={id}
                size={3}
                sx={{
                  p: 1,
                  height: "80px",
                  bgcolor: "rgba(140, 82, 255, 0.3)",
                  border: "0px solid #8c52ff",
                  borderRadius: "10px",
                  transition: "all 0.4s ease-in-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    height: "125px",
                    border: "1px solid #8c52ff",
                  },
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{
                    maxWidth: "90%",
                    maxHeight: "90%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </RevealOnScroll>
  );
};
