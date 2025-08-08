import { useState } from "react";
import emailjs from "emailjs-com";
import { Grid, Box, Button, Link, TextField, Typography } from "@mui/material";
import { RevealOnScroll } from "../RevealOnScroll";
import contact from "../../../public/contact.png";

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
      .catch(() => alert("Oops! Algo salió mal. Intenta de nuevo más tarde."));
  };

  return (
    <Box component="section" id="contact">
      <RevealOnScroll>
        <Grid
          container
          sx={{ backgroundColor: "#8c52ff", p: 2 }}
          spacing={3}
          justifyContent="center"
        >
          <Grid
            size={{ xs: 12, md: 10 }}
            sx={{ mt: "100px" }}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={contact}
              alt="Contact me"
              sx={{ width: 250, maxWidth: "100%" }}
            />
          </Grid>

          <Grid size={{ xs: 12 }} display="flex" justifyContent="center">
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: "100%",
                minWidth: 300,
                maxWidth: 500,
                p: 3,
              }}
            >
              {/* Nombre */}
              <Box sx={{ mb: 2, color: "white" }}>
                <TextField
                  fullWidth
                  required
                  id="name"
                  name="name"
                  placeholder="Nombre completo..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, name: e.target.value }))
                  }
                  variant="outlined"
                  InputProps={{
                    sx: {
                      color: "white",
                      backgroundColor: "#8c52ff",
                      "& input::placeholder": { color: "#fff", opacity: 1 },
                      "& fieldset": { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#8c52ff" },
                      "&.Mui-focused fieldset": { borderColor: "#5e17eb" },
                    },
                  }}
                />
              </Box>

              {/* Email */}
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, email: e.target.value }))
                  }
                  variant="outlined"
                  InputProps={{
                    sx: {
                      color: "white",
                      backgroundColor: "#8c52ff",
                      "& input::placeholder": { color: "#fff", opacity: 1 },
                      "& fieldset": { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#8c52ff" },
                      "&.Mui-focused fieldset": { borderColor: "#5e17eb" },
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  required
                  id="message"
                  name="message"
                  placeholder="Tu mensaje..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, message: e.target.value }))
                  }
                  variant="outlined"
                  multiline
                  rows={5}
                  InputProps={{
                    sx: {
                      color: "white",
                      backgroundColor: "#8c52ff",
                      "& textarea::placeholder": { color: "#fff", opacity: 1 },
                      "& fieldset": { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#8c52ff" },
                      "&.Mui-focused fieldset": { borderColor: "#5e17eb" },
                    },
                  }}
                />
              </Box>

              {/* Botón submit */}
              <Grid size={12} sx={{ mb: 1 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{
                    color: "white",
                    py: 1.5,
                    background: "#5e17eb",
                    textTransform: "none",
                    fontWeight: 500,
                    boxShadow: "none",
                    transition: "transform 0.15s ease, box-shadow 0.15s ease",
                    "&:hover": {
                      background: "#5e17eb",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Enviar mensaje
                </Button>
              </Grid>

              {/* Enlace a LinkedIn */}
              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography sx={{ color: "#fff" }}>
                  También puedes visitarme en:
                </Typography>
                <Link
                  href="https://www.linkedin.com/in/jimena-araya-4b2093372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  LinkedIn → /jimena-araya
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </RevealOnScroll>
    </Box>
  );
};
