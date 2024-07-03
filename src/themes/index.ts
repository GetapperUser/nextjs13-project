import { createTheme, responsiveFontSizes } from "@mui/material";

export default responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#71B9DA",
      },
      secondary: {
        main: "#1291A8",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },
    },
  }),
);
