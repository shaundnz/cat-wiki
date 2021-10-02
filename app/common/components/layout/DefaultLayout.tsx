import { Box } from "@chakra-ui/layout";
import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Box px="6">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
