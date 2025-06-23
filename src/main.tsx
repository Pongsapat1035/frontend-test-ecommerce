import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import router from "./route";
import themeOptions from "./theme";
import "./style/main.css";

import { ProductProvider } from "./productContext";
import { QueryProvider } from "./queryContext";
import { CartProvider } from "./cartContext";

const theme = createTheme(themeOptions);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <ProductProvider>
      <QueryProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </QueryProvider>
    </ProductProvider>
  </ThemeProvider>
);
