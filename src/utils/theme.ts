import { Theme, createTheme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#0088FF",
    },
    success: {
      main: "#42C950",
    },
    error: {
      main: "#FF3333",
    },
    info: { main: "#0088FF" },
    warning: { main: "#FF6A34" },
    background: {
      paper: "#FFFFFF",
      default: "#FCFCFD",
    },
    text: { primary: "#101828", secondary: "#475467" },
  },

  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true, fullWidth: true },
      styleOverrides: {
        root: {
          disableElevation: true,
          textTransform: "none",
        },
        contained: {
          height: "44px",
        },
        text: { height: "25px" },
        outlined: {
          fontWeight: 600,
          height: "44px",
        },
      },
    },
  },
});

export default theme;
