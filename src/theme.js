import { createTheme } from "@mui/material";

//Fonts
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#8c52ff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    button: {
      fontWeight: 900,
    },
  },
  shape: {
    borderRadius: 7,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
  },
});
