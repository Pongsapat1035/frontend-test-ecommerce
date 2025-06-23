import type { ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
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
};

export default themeOptions