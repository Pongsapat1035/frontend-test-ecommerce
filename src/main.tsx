import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./route";
import "./style/main.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ProductProvider } from "./productContext";
import { QueryProvider } from "./queryContext";
import { AlertProvider } from "./alertContext";
import { CartProvider } from "./cartContext";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a1a1a",
      light: "#cecdcd",
    },
    secondary: {
      main: "#ffab36",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#2b2a29",
      secondary: "rgba(61,60,60,0.6)",
    },
  },
  typography: {
    fontFamily: "Inria Sans",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "contained" },
              style: {
                borderRadius: 10,
                fontWeight: "bold",
                fontSize: "1rem",
                padding: "0.7rem 0",
                textTransform: "none",
                boxShadow: "none",
              },
            },
          ],
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <ProductProvider>
      <QueryProvider>
        <AlertProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </AlertProvider>
      </QueryProvider>
    </ProductProvider>
  </ThemeProvider>
);
