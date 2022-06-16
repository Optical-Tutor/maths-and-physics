import "../styles/globals.css";
import type { AppProps } from "next/app"; 

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#03488d",
    800: "#04afd8",
    700: "#72daf2",
    600: "#bfffea",
    500: "#ffbcaa",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
