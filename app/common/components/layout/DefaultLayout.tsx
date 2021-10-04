import { Flex } from "@chakra-ui/layout";
import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import Head from "next/head";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="CatIcon.svg" />
      </Head>
      <Flex direction="column" px="6" minH="100vh">
        <Header />
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default DefaultLayout;
