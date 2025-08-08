import { Chip, Grid, Stack, Typography } from "@mui/material";
import frontend from "../../../public/frontend.png";
import backend from "../../../public/backend.png";
import about from "../../../public/about.png";
import mision from "../../../public/mision.png";
import valores from "../../../public/valores.png";
import vision from "../../../public/vision.png";
import { RevealOnScroll } from "../RevealOnScroll";
import { Education } from "./Education";

export const AboutMe = () => {
  return (
    <section id="about">
      <RevealOnScroll>
        <Grid
          container
          sx={{ bgcolor: "#000", p: 2, minHeight: "100vh" }}
          spacing={3}
          justifyContent="center"
          alignContent="center"
        >
          <Grid size={{ xs: 12, md: 10 }} sx={{ mt: "100px" }}>
            <img src={about} width="250px" alt="About me" />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <Typography variant="body2">
              Soy estudiante de Ingeniería del Software en la Universidad
              CENFOTEC. A lo largo de mi carrera he trabajado con diversas
              tecnologías, desarrollando soluciones tanto del lado del cliente
              como del servidor. Me destaco por ser responsable, curiosa,
              empática y comprometida con mi crecimiento personal y profesional.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              p: 3,
              height: "160px",
              bgcolor: "#000",
              border: "1px solid #8c52ff",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                height: "200px",
                border: "1px solid #8c52ff",
                "& .hover-image": {
                  transform: "translateY(-10px)",
                },
                "& .hover-chips": {
                  opacity: 1,
                  visibility: "visible",
                  height: "auto",
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Stack
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <img
                src={frontend}
                alt={"Frontend"}
                style={{
                  width: "60%",
                  objectFit: "contain",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
              />
              <Stack
                direction="row"
                spacing={1}
                className="hover-chips"
                sx={{
                  opacity: 0,
                  visibility: "hidden",
                  height: 0,
                  overflow: "hidden",
                  transform: "translateY(10px)",
                  transition:
                    "opacity 0.3s ease, transform 0.3s ease, height 0.3s ease",
                }}
              >
                <Chip
                  label="React"
                  sx={{ color: "#8c52ff", bgcolor: "rgba(140, 82, 255, 0.3)" }}
                />
                <Chip
                  label="Javascript"
                  sx={{ color: "#8c52ff", bgcolor: "rgba(140, 82, 255, 0.3)" }}
                />
                <Chip
                  label="HTML"
                  sx={{ color: "#8c52ff", bgcolor: "rgba(140, 82, 255, 0.3)" }}
                />
                <Chip
                  label="CSS"
                  sx={{ color: "#8c52ff", bgcolor: "rgba(140, 82, 255, 0.3)" }}
                />
                <Chip
                  label="Bootstrap"
                  sx={{ color: "#8c52ff", bgcolor: "rgba(140, 82, 255, 0.3)" }}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              p: 3,
              height: "160px",
              bgcolor: "#000",
              border: "1px solid #8c52ff",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                height: "200px",
                border: "1px solid #8c52ff",
                "& .hover-image": {
                  transform: "translateY(-10px)",
                },
                "& .hover-chips": {
                  opacity: 1,
                  visibility: "visible",
                  height: "auto",
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Stack
              spacing={1}
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <img
                src={backend}
                alt="Backend"
                className="hover-image"
                style={{
                  width: "60%",
                  objectFit: "contain",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
              />
              <Stack
                direction="row"
                spacing={1}
                className="hover-chips"
                sx={{
                  opacity: 0,
                  visibility: "hidden",
                  height: 0,
                  overflow: "hidden",
                  transform: "translateY(10px)",
                  transition:
                    "opacity 0.3s ease, transform 0.3s ease, height 0.3s ease",
                }}
              >
                <Chip
                  label="Java"
                  sx={{ color: "#8c52ff", bgcolor: "rgba(140, 82, 255, 0.3)" }}
                />
                <Chip
                  label="C#"
                  sx={{ color: "#8c52ff", bgcolor: "rgba(140, 82, 255, 0.3)" }}
                />
                <Chip
                  label="Python"
                  sx={{ color: "#8c52ff", bgcolor: "rgba(140, 82, 255, 0.3)" }}
                />
                <Chip
                  label="SQL"
                  sx={{ color: "#8c52ff", bgcolor: "rgba(140, 82, 255, 0.3)" }}
                />
                <Chip
                  label="Spring Boot"
                  sx={{ color: "#8c52ff", bgcolor: "rgba(140, 82, 255, 0.3)" }}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} sx={{ mt: 3, mb: 3 }}>
            <Education />
          </Grid>

          <Grid
            size={{ xs: 12, md: 3.3 }}
            sx={{
              p: 3,
              height: "160px",
              bgcolor: "#000",
              border: "1px solid #8c52ff",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                height: "200px",
                border: "1px solid #8c52ff",
                "& .hover-chips": {
                  opacity: 1,
                  visibility: "visible",
                  height: "auto",
                  transform: "translateY(0)",
                },
                "& .hover-image": {
                  transform: "translateY(-10px)",
                },
              },
            }}
          >
            <Stack
              spacing={1}
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <img
                src={mision}
                alt="Mision"
                className="hover-image"
                style={{
                  width: "60%",
                  objectFit: "contain",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
              />
              <Stack
                className="hover-chips"
                sx={{
                  opacity: 0,
                  visibility: "hidden",
                  height: 0,
                  overflow: "hidden",
                  transform: "translateY(10px)",
                  transition:
                    "opacity 0.3s ease, transform 0.3s ease, height 0.3s ease",
                }}
              >
                <Typography variant="body2">
                  Desarrollar soluciones digitales eficientes y funcionales que
                  respondan a las necesidades reales de usuarios y empresas.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3.3 }}
            sx={{
              p: 3,
              height: "160px",
              bgcolor: "#000",
              border: "1px solid #8c52ff",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                height: "200px",
                border: "1px solid #8c52ff",
                "& .hover-chips": {
                  opacity: 1,
                  visibility: "visible",
                  height: "auto",
                  transform: "translateY(0)",
                },
                "& .hover-image": {
                  transform: "translateY(-10px)",
                },
              },
            }}
          >
            <Stack
              spacing={1}
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <img
                src={vision}
                alt="Vision"
                className="hover-image"
                style={{
                  width: "60%",
                  objectFit: "contain",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
              />
              <Stack
                className="hover-chips"
                sx={{
                  opacity: 0,
                  visibility: "hidden",
                  height: 0,
                  overflow: "hidden",
                  transform: "translateY(10px)",
                  transition:
                    "opacity 0.3s ease, transform 0.3s ease, height 0.3s ease",
                }}
              >
                <Typography variant="body2">
                  Convertirme en una profesional reconocida por el diseño de
                  productos tecnológicos innovadores, accesibles y con impacto
                  positivo.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3.3 }}
            sx={{
              p: 3,
              height: "160px",
              bgcolor: "#000",
              border: "1px solid #8c52ff",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                height: "200px",
                border: "1px solid #8c52ff",
                "& .hover-chips": {
                  opacity: 1,
                  visibility: "visible",
                  height: "auto",
                  transform: "translateY(0)",
                },
                "& .hover-image": {
                  transform: "translateY(-10px)",
                },
              },
            }}
          >
            <Stack
              spacing={1}
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <img
                src={valores}
                alt="Valores"
                className="hover-image"
                style={{
                  width: "60%",
                  objectFit: "contain",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
              />
              <Stack
                className="hover-chips"
                sx={{
                  opacity: 0,
                  visibility: "hidden",
                  height: 0,
                  overflow: "hidden",
                  transform: "translateY(10px)",
                  transition:
                    "opacity 0.3s ease, transform 0.3s ease, height 0.3s ease",
                }}
              >
                <Typography variant="body2">
                  <li>Responsabilidad</li>
                  <li>Curiosidad</li>
                  <li>Empatía</li>
                  <li>Superación</li>
                  <li>Honestidad</li>
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </RevealOnScroll>
    </section>
  );
};
