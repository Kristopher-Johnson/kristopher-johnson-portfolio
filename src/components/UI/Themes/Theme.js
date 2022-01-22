import { createTheme } from "@mui/material/styles/";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    mainButton: {
      main: "#727577",
      darker: "#727577",
      contrastText: "#fff",
    },
    outlinedButton: {
      main: "#fff",
      darker: "#727577",
      contrastText: "#fff",
    },
  },
});

export default theme;
