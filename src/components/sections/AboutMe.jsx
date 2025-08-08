import { Chip, Grid, Stack, Typography } from "@mui/material";
import frontend from "../../../public/frontend.png";
import backend from "../../../public/backend.png";
import about from "../../../public/about.png";

export const AboutMe = () => {
  return (
    <section id="about">
      <Grid
        container
        sx={{ bgcolor: "#000", p: 2 }}
        spacing={3}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, md: 10 }} align="center">
          <Stack spacing={3} textAlign="left">
            <img src={about} width="250px" alt="About me" />
            <Typography variant="body2">
              Soy estudiante de Ingeniería del Software en la Universidad
              CENFOTEC. A lo largo de mi carrera he trabajado con diversas
              tecnologías, desarrollando soluciones tanto del lado del cliente
              como del servidor. Me destaco por ser responsable, curiosa,
              empática y comprometida con mi crecimiento personal y profesional.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            p: 1,
            height: "140px",
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
                maxWidth: "60%",
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
            p: 1,
            height: "140px",
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
                maxWidth: "60%",
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
      </Grid>
    </section>
  );
};
