import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import proyects from "../../../public/proyectos.png";
import { RevealOnScroll } from "../RevealOnScroll";
import { ArrowForwardIos } from "@mui/icons-material";
import nutriagenda from "../../../public/nutriagenda.png";
import multica from "../../../public/multica.png";
import sistemaacademico from "../../../public/sistemaacademico.png";
import colaconlista from "../../../public/colaconlista.png";

export const Proyects = () => {
  return (
    <section id="projects">
      <RevealOnScroll>
        <Grid
          container
          sx={{
            p: 2,
            background: `linear-gradient(180deg,rgba(0, 0, 0, 1) 13%, rgba(151, 99, 255, 1) 92%, rgba(140, 82, 255, 1) 100%)`,
          }}
          spacing={3}
          justifyContent="center"
        >
          <Grid size={{ xs: 12, md: 10 }} sx={{ mt: "100px" }}>
            <img src={proyects} width="250px" alt="About me" />
          </Grid>
          
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              p: 1,
              height: "200px",
              border: "1px solid #fff",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                height: "240px",
                "& .details": {
                  opacity: 1,
                  visibility: "visible",
                  transform: "translateY(0)",
                },
                "& .cover-image": {
                  opacity: 0,
                  visibility: "hidden",
                  transform: "scale(0.98)",
                },
              },
            }}
          >
            <Box
              className="cover-image"
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
                zIndex: 1,
              }}
            >
              <img
                src={nutriagenda}
                alt="NutriAgenda"
                style={{
                  maxWidth: "70%",
                  maxHeight: "70%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
            <Stack
              className="details"
              spacing={1}
              sx={{
                p: 2,
                height: "100%",
                opacity: 0,
                visibility: "hidden",
                transform: "translateY(6px)",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
                position: "relative",
                zIndex: 2,
              }}
              alignItems="flex-start"
              justifyContent="flex-start"
              textAlign="left"
            >
              <img
                src={nutriagenda}
                alt="NutriAgenda"
                style={{ display: "none" }}
              />
              <Stack>
                <Typography fontWeight="bold" variant="h6">
                  NutriAgenda
                </Typography>
                <Typography variant="body2">
                  Aplicación para nutricionistas que permite registrar
                  pacientes, programar citas y llevar un seguimiento de su
                  evolución. Desarrollada para el curso de Diseño y Construcción
                  de Componentes.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Chip
                  label="Spring Boot"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="Java"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="HTML"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="MySQL"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="Bootstrap"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
              </Stack>

              <Button
                endIcon={<ArrowForwardIos />}
                sx={{ color: "white" }}
                variant="text"
              >
                Ver proyecto
              </Button>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              p: 1,
              height: "200px",
              border: "1px solid #fff",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                height: "240px",
                "& .details": {
                  opacity: 1,
                  visibility: "visible",
                  transform: "translateY(0)",
                },
                "& .cover-image": {
                  opacity: 0,
                  visibility: "hidden",
                  transform: "scale(0.98)",
                },
              },
            }}
          >
            <Box
              className="cover-image"
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
                zIndex: 1,
              }}
            >
              <img
                src={multica}
                alt="MulTica"
                style={{
                  maxWidth: "70%",
                  maxHeight: "70%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
            <Stack
              className="details"
              spacing={1}
              sx={{
                p: 2,
                height: "100%",
                opacity: 0,
                visibility: "hidden",
                transform: "translateY(6px)",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
                position: "relative",
                zIndex: 2,
              }}
              alignItems="flex-start"
              justifyContent="flex-start"
              textAlign="left"
            >
              <img src={multica} alt="MulTica" style={{ display: "none" }} />
              <Stack>
                <Typography fontWeight="bold" variant="h6">
                  MulTica
                </Typography>
                <Typography variant="body2">
                  Sistema de gestión de multas de tránsito desarrollado en el
                  curso Proyecto de Ingeniería de Software 2. Incluye registro
                  de infracciones, roles de usuario y generación de reportes.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Chip
                  label="C#"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label=".NET"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="SQL Server"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="HTML"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="JavaScript"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
              </Stack>

              <Button
                endIcon={<ArrowForwardIos />}
                sx={{ color: "white" }}
                variant="text"
              >
                Ver proyecto
              </Button>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              p: 1,
              height: "200px",
              border: "1px solid #fff",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                height: "240px",
                "& .details": {
                  opacity: 1,
                  visibility: "visible",
                  transform: "translateY(0)",
                },
                "& .cover-image": {
                  opacity: 0,
                  visibility: "hidden",
                  transform: "scale(0.98)",
                },
              },
            }}
          >
            <Box
              className="cover-image"
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
                zIndex: 1,
              }}
            >
              <img
                src={sistemaacademico}
                alt="Sistema Académico"
                style={{
                  maxWidth: "70%",
                  maxHeight: "70%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
            <Stack
              className="details"
              spacing={1}
              sx={{
                p: 2,
                height: "100%",
                opacity: 0,
                visibility: "hidden",
                transform: "translateY(6px)",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
                position: "relative",
                zIndex: 2,
              }}
              alignItems="flex-start"
              justifyContent="flex-start"
              textAlign="left"
            >
              <img
                src={sistemaacademico}
                alt="Sistema Académico"
                style={{ display: "none" }}
              />
              <Stack>
                <Typography fontWeight="bold" variant="h6">
                  Sistema Académico
                </Typography>
                <Typography variant="body2">
                  Plataforma de gestión académica para universidades. Permite
                  administrar carreras, cursos, grupos, matrículas y más.
                  Implementado con arquitectura MVC y base de datos relacional.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Chip
                  label="Spring Boot"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="Java"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="MySQL"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="HTML"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="Bootstrap"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
              </Stack>

              <Button
                endIcon={<ArrowForwardIos />}
                sx={{ color: "white" }}
                variant="text"
              >
                Ver proyecto
              </Button>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              p: 1,
              height: "200px",
              border: "1px solid #fff",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                height: "240px",
                "& .details": {
                  opacity: 1,
                  visibility: "visible",
                  transform: "translateY(0)",
                },
                "& .cover-image": {
                  opacity: 0,
                  visibility: "hidden",
                  transform: "scale(0.98)",
                },
              },
            }}
          >
            <Box
              className="cover-image"
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
                zIndex: 1,
              }}
            >
              <img
                src={colaconlista}
                alt="Cola con Lista"
                style={{
                  maxWidth: "70%",
                  maxHeight: "70%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
            <Stack
              className="details"
              spacing={1}
              sx={{
                p: 2,
                height: "100%",
                opacity: 0,
                visibility: "hidden",
                transform: "translateY(6px)",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
                position: "relative",
                zIndex: 2,
              }}
              alignItems="flex-start"
              justifyContent="flex-start"
              textAlign="left"
            >
              <img
                src={colaconlista}
                alt="Cola con Lista"
                style={{ display: "none" }}
              />
              <Stack>
                <Typography fontWeight="bold" variant="h6">
                  Cola con Lista Enlazada
                </Typography>
                <Typography variant="body2">
                  Aplicación que implementa una cola usando listas enlazadas
                  simples en Java. Permite insertar, extraer, obtener por
                  posición y visualizar gráficamente los elementos sin usar
                  estructuras predefinidas.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Chip
                  label="Estructuras de Datos"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="Java"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="Algoritmos"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
                <Chip
                  label="Consola"
                  sx={{ color: "white", bgcolor: "rgba(200,200,200,0.3)" }}
                />
              </Stack>

              <Button
                endIcon={<ArrowForwardIos />}
                sx={{ color: "white" }}
                variant="text"
              >
                Ver proyecto
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </RevealOnScroll>
    </section>
  );
};
