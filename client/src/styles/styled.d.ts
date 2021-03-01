// import original module declarations
import "styled-components";
type colors = "red" | "green";

interface mainColors {
  orange: string;
  blue: string;
  black: string;
}

interface secondaryColors {
  blue: string;
  lightBlue: string;
}

interface grayColors {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
}

interface fonts {
    main: string;
    secondary: string;
  }
  

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: mainColors;
      secondary: secondaryColors;
    };

    grays: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
      }

    fonts: {
        main: string;
        secondary: string;
    }
    
  }
}

