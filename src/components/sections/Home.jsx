import { RevealOnScroll } from "../RevealOnScroll";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import profile from "../../../public/profile.png";
import presentation from "../../../public/presentation.png";

export const Home = () => {
  return (
    <section id="home">
      <Grid
        container
        sx={{ p: 2, bgcolor: "#000" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{ marginTop: "20px", marginBottom: "20px" }}
          align="center"
        >
          <img src={profile} width="250px" alt="Profile photo" />
        </Grid>
        <Grid
          size={{ xs: 12, md: 7 }}
          sx={{ marginTop: "20px", marginBottom: "20px" }}
          align="center"
        >
          <Stack textAlign="left" spacing={1}>
            <img src={presentation} width="550px" alt="Presentation" />
            <Typography variant="body2">
              Ingeniera en Software especializada en desarrollo de soluciones
              web con conocimientos en desarrollo Front-End y Back-End, manejo
              de bases de datos SQL y experiencia en proyectos académicos
              orientados a resolver problemas reales. Apasionada por la
              innovación, la eficiencia y el diseño centrado en el usuario.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};
