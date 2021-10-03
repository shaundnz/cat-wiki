import { Flex } from "@chakra-ui/layout";
import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Flex direction="column" px="6" minH="100vh">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default DefaultLayout;
