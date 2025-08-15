import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },
});

export default theme;