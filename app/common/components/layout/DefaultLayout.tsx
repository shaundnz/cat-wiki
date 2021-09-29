import { Box } from "@chakra-ui/layout";
import React from "react";
import Header from "../modules/Header";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Box px={[3, 3, 6]} py="3">
      <Header />
      {children}
    </Box>
  );
};

export default DefaultLayout;
