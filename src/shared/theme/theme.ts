import { background, extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const theme = extendTheme({
  colors: {
    fishPalette: {
      red: '#e63946',
      green: '#457b9d',
      white: '#f1faee',
      gray: '#a8dadc',
      cyan: '#1d3557',
      darkBlue: "#0d1b2a"
    },
    doenet: {
      mainBlue: "#1a5a99",
      lightBlue: "#b8d2ea",
      solidLightBlue: "#8fb8de",
      mainGrey: "#e3e3e3",
      donutBody: "#eea177",
      donutTopping: "#6d4445",
      mainRed: "#c1292e",
      lightRed: "#eab8b8",
      mainGreen: "#459152",
      canvas: "#ffffff",
      canvastext: "#000000",
      lightGreen: "#a6f19f",
      lightYellow: "#f5ed85",
      whiteBlankLink: "#6d4445",
      mainYellow: "#94610a",
      mainPurple: "#4a03d9"
    }
  },
  components: {
    Text: {
      baseStyle: {
        color: "fishPalette.white"
      }
    },
    Button: {
      baseStyle: {
        fontWeight: "normal",
        letterSpacing: ".5px",
        _focus: {
          outline: "2px solid #2D5994",
          outlineOffset: "2px"
        },
        _disabled: {
          bg: "#E2E2E2",
          color: "black"
        }
      },
      variants: {
        // We can override existing variants
        solid: {
          bg: "fishPalette.red",
          color: "fishPalette.white",
          _hover: {
            bg: "fishPalette.white",
            color: "fishPalette.red",
            _disabled: { bg: "fishPalette.red" }
          }
        },
        outline: {
          borderColor: "fishPalette.white",
          _hover: {
            bg: "fishPalette.red",
            _disabled: { bg: "#E2E2E2" }
          }
        },
        ghost: {
          _hover: {
            bg: "fishPalette.red",
            _disabled: { bg: "#E2E2E2" }
          }
        },
        link: {
          color: "fishPalette.red"
          // _disabled: { bg: "white" }
        }
      }
    }
  },
  backgroundColor: {
    body: "fishPalette.red"
  }
});
