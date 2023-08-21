import {extendTheme, type ThemeConfig  } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config, 
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("fishPalette.darkBlue", "fishPalette.darkBlue")(props)
      }
    })
  },
  colors: {
    fishPalette: {
      red: '#e63946',
      green: '#457b9d',
      white: '#f1faee',
      gray: '#a8dadc',
      cyan: '#1d3557',
      darkBlue: "#0d1b2a"
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
