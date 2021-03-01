// my-theme.ts
import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    main: {
      orange: "#F49A12",
      blue: "#0041FF",
      black: "#030314",
    },
    secondary: {
      blue: "#0041FF",
      lightBlue: "#0F89FF",
    },
  },
  grays: {
    100: "#F3F4F6",
    200: "ABAFC7",
    300: "70798B",
    400: "212C3A",
    500: "192431",
    600: "192431",
  },
  fonts: {
    main: "neue-haas-unica, sans-serif;",
    secondary: "'Inter', sans-serif;",
  },
};

export default theme;
