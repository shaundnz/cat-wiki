import { Box, Heading, VStack, Text } from "@chakra-ui/layout";
import React from "react";
import Search from "./Search";
import "@fontsource/mystery-quest/400.css";
import MainContainerTop from "./MainContainerTop";
import MainComponentBottom from "./MainComponentBottom";

const MainContainer = () => {
  return (
    <Box borderRadius="16" overflow="hidden">
      <MainContainerTop />
      <MainComponentBottom />
    </Box>
  );
};

export default MainContainer;
