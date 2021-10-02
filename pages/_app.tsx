import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";
import "@fontsource/montserrat/400.css";
import "@fontsource/noto-sans/400.css";
import theme from "../app/common/styles/theme";
import BreedsContextProvider from "../app/common/context/BreedsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <BreedsContextProvider>
        <Component {...pageProps} />
      </BreedsContextProvider>
    </ChakraProvider>
  );
}
export default MyApp;
