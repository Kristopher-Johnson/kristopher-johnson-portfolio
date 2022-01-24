import { createTheme } from "@mui/material/styles/";

const theme = createTheme({
  palette: {
    mainButton: {
      main: "#727577",
      contrastText: "#fff",
    },
    outlinedButton: {
      main: "#fff",
      contrastText: "#fff",
    },
    contactButton: {
      // main: "#727577",
      main: "#5c5b5b",
      contrastText: "#fff",
    },
  },
});

export default theme;
