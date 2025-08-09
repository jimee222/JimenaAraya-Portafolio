import { Grid, IconButton, Stack, Typography } from "@mui/material";
import profile from "../../../public/profile.png";
import presentation from "../../../public/presentation.png";
import { LinkedIn, Mail, GitHub, WhatsApp } from "@mui/icons-material";

export const Home = () => {
  return (
    <section id="home">
      <Grid
        container
        sx={{ p: 2, bgcolor: "#000", height: "80vh" }}
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
            <Stack direction="row">
              <IconButton
                color="secondary"
                href="https://www.linkedin.com/in/jimena-araya-4b2093372/"
              >
                <LinkedIn />
              </IconButton>
              <IconButton color="secondary" href="#contact">
                <Mail />
              </IconButton>
              <IconButton
                color="secondary"
                href="https://github.com/jimee222"
              >
                <GitHub />
              </IconButton>
               <IconButton
                color="secondary"
                href="https://wa.me/50686550660"
              >
                <WhatsApp/>
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};
