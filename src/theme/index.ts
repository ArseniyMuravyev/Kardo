import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4310",
      dark: "#A62705",
      light: "#FF714C",
    },
    secondary: {
      main: "#BF5539",
      dark: "#995846",
      light: "#CC5635",
    },
    success: {
      main: "#0FFF67",
      dark: "#315653",
    },
    info: {
      main: "#475480",
      light: "#0FF5FF",
    },
    warning: {
      main: "#664B43",
      light: "#AA5943",
    },
    grey: {
      50: "#F1F1F1",
      100: "#BFBFBF",
      200: "#808080",
      300: "#676767",
      400: "#39393A",
      500: "#454444",
      600: "#313131",
    },
  },
});
