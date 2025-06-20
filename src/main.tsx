import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./route";
import "./style/main.css";
import type { ThemeOptions } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1a1a1a",
    },
    secondary: {
      main: "#ffab36",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#2b2a29",
      secondary: "rgba(61,60,60,0.6)",
    },
  },
  typography: {
    fontFamily: "Inria Sans",
  },
};

const theme = createTheme(themeOptions);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
